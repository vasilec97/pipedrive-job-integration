import { PIPEDRIVE_OAUTH_TOKEN } from "@/shared/const/pipedriveEndpoints";
import { PipedriveOAuthResponse } from "@/shared/types/oauth";
import { NextRequest, NextResponse } from "next/server";

const client_id = process.env.PIPEDRIVE_CLIENT_ID
const client_secret = process.env.PIPEDRIVE_CLIENT_SECRET
const encodedAuth = btoa(`${client_id}:${client_secret}`)

export async function GET(req: NextRequest) {
  let access_token, refresh_token
  const refreshTokenCookie = req.cookies.get('refresh_token')
  const prev_refresh_token = refreshTokenCookie?.value || ''
  console.log('Previous refresh token: ', prev_refresh_token)

  try {
    const tokenRespponse = await fetch(PIPEDRIVE_OAUTH_TOKEN, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Authorization: `Basic ${encodedAuth}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: prev_refresh_token
      })
    })
    const data = await tokenRespponse.json() as PipedriveOAuthResponse
    console.log('Refresh token result: ', data)

    access_token = data.access_token
    refresh_token = data.refresh_token
  } catch (err) {
    return NextResponse.json({
      message: 'Unauthorized error!'
    }, {
      status: 401
    })
  }

  const response = NextResponse.json({
    accessToken: access_token
  }, { 
    status: 200 
  })
  
  response.cookies.set({
    name: 'refresh_token',
    value: refresh_token || '',
    maxAge: 60*60*24*60, // 60 days
    httpOnly: true,
    sameSite: 'strict'
  })

  return response
}