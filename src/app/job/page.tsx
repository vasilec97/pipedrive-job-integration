'use client'

import { $fetch } from "@/shared/api/fetch"
import { ME } from "@/shared/const/pipedriveEndpoints"
import Link from "next/link"
import { useEffect, useState } from "react"

type SearchParams = {
  jobId: string
  accessToken: string
}

type User = {
  company_domain: string
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const [user, setUser] = useState<User>()
  const { jobId } = searchParams

  useEffect(() => {
    $fetch(ME, {
      method: 'GET',
    }).then(
      res => res.json()
    ).then(({ data }) => setUser(data))
  }, [])

  const href = `https://${user?.company_domain}.${process.env.NEXT_PUBLIC_PIPEDRIVE_URL}/deal/${jobId}`

  return (
    <h1>  
      Job is created!
      {' '}
      <Link href={href}>View Deal</Link>
    </h1>
  )
}