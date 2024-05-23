'use client'

import { CreateDealForm } from '@/components/CreateDealForm/CreateDealForm'
import cls from './Page.module.css'
import { CreateDealFormProvider } from '@/app/providers/CreateDealProvider/CreateDealProvider'

export default function Home() {
  return <main className={cls.app}>
    <CreateDealFormProvider>
      <CreateDealForm />
    </CreateDealFormProvider>
  </main>
}
