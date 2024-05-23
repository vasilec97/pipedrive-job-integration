'use client'

import { Routes } from "@/shared/const/routes"
import { redirect, useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import { Suspense } from "react"

const Page = () => {
  const router = useRouter()
  const sp = useSearchParams()
  const token = sp.get('token')

  if (token) {
    localStorage.setItem('token', token)
    router.push(Routes.MAIN)
  }

  return <></>
}

export default function SuspensePage() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}