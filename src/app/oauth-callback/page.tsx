'use client'

import { Routes } from "@/shared/const/routes"
import { redirect, useSearchParams } from "next/navigation"
import { Suspense } from "react"

const Page = () => {
  const sp = useSearchParams()
  const token = sp.get('token')

  if (token) {
    localStorage.setItem('token', token)
  }

  redirect(Routes.MAIN)
}

export default function SuspensePage() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}