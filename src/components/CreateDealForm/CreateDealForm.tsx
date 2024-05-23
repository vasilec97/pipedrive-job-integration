'use client'

import React, { FormEvent, useContext } from 'react'
import cls from './CreateDealForm.module.css'
import { ClientDetailsCard } from '@/components/ClientDetailsCard/ClientDetailsCard'
import { JobDetailsCard } from '@/components/JobDetailsCard/JobDetailsCard'
import { ServiceLocationCard } from '@/components/ServiceLocationCard/ServiceLocationCard'
import { SheduledCard } from '@/components/SheduledCard/SheduledCard'
import { classNames } from '@/shared/lib/classNames/classNames'
import { CreateDealFormContext } from '@/shared/lib/context/createDealForm'

export const CreateDealForm = () => {
  const { submitForm, loading } = useContext(CreateDealFormContext)

  const buttonMods = {
    [cls.loading]: loading
  }

  return (
    <form onSubmit={submitForm} className={cls.CreateDealForm}>
      <div className={cls.formCards}>
        <ClientDetailsCard />
        <JobDetailsCard />
        <ServiceLocationCard />
        <SheduledCard />
      </div>
      <button className={classNames(cls.submitBtn, buttonMods)} type="submit">
        {!loading ? 'Create job' : 'Request is sent...'}
      </button>
    </form>
  )
}