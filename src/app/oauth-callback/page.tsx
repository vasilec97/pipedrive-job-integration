'use client'

import { redirect, useSearchParams } from "next/navigation"
import { Suspense } from "react"

const Page = () => {
  const sp = useSearchParams()
  const token = sp.get('token')

  if (token) {
    localStorage.setItem('token', token)
  }

  redirect('http://localhost:3000')
}

export default function SuspensePage() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}