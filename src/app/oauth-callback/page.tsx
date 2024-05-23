'use client'

import { redirect, useSearchParams } from "next/navigation"

export default function Page() {
  const sp = useSearchParams()
  const token = sp.get('token')

  if (token) {
    localStorage.setItem('token', token)
  }

  redirect('http://localhost:3000')
}