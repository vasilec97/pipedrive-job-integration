import { useCreateDealForm } from '@/components/CreateDealForm/hooks/useCreateDealForm'
import { CreateDealFormContext } from '@/shared/lib/context/createDealForm'
import { ReactNode } from 'react'

export const CreateDealFormProvider = ({ children }: { children: ReactNode }) => {
  const data = useCreateDealForm()

  return (
    <CreateDealFormContext.Provider value={data}>{children}</CreateDealFormContext.Provider>
  )
}