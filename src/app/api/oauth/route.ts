import { PIPEDRIVE_OAUTH_TOKEN } from "@/shared/const/pipedriveEndpoints";
import { Routes } from "@/shared/const/routes";
import { PipedriveOAuthResponse } from "@/shared/types/oauth";
import { NextRequest, NextResponse } from "next/server";

const client_id = process.env.PIPEDRIVE_CLIENT_ID
const client_secret = process.env.PIPEDRIVE_CLIENT_SECRET
const encodedAuth = btoa(`${client_id}:${client_secret}`)

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  const code = sp.get('code')
  let access_token, refresh_token

  try {
    const tokenRespponse = await fetch(PIPEDRIVE_OAUTH_TOKEN, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Authorization: `Basic ${encodedAuth}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code || '',
        redirect_uri: `${process.env.NEXT_PUBLIC_API}/oauth`
      })
    })
    const data = await tokenRespponse.json() as PipedriveOAuthResponse
    
    access_token = data.access_token
    refresh_token = data.refresh_token
  } catch (err) {
    console.log('Error on oauth server route handler: ', err)
  }

  const response = NextResponse.redirect(`${process.env.CLIENT_URL}${Routes.OAUTH}?token=${access_token}`)
  response.cookies.set({
    name: 'refresh_token',
    value: refresh_token || '',
    maxAge: 60*60*24*60, // 60 days
    httpOnly: true,
    sameSite: 'strict'
  })

  return response
}