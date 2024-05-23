import { FormCard } from '@/components/FormCard/FormCard'
import { Input } from '@/shared/UI/Input'
import { CreateDealFormContext } from '@/shared/lib/context/createDealForm'
import React, { useContext } from 'react'

export const ClientDetailsCard = () => {
  const {
    firstName,
    lastName,
    phone,
    email,
    onFirstNameChange,
    onLastNameChange,
    onPhoneChange,
    onEmailChange
  } = useContext(CreateDealFormContext)
  return (
    <FormCard title="Client details">
      <div className='flex row fieldGap w-full'>
        <Input placeholder="First Name" value={firstName} onChange={onFirstNameChange} required />
        <Input placeholder="Last Name" value={lastName} onChange={onLastNameChange} required />
      </div>
      <Input placeholder="Phone" type="tel" value={phone} onChange={onPhoneChange} required full />
      <Input placeholder="Email" type="email" value={email} onChange={onEmailChange} required full />
    </FormCard>
  )
}