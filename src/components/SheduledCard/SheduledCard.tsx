import { FormCard } from '@/components/FormCard/FormCard'
import { getTimeItems } from './utils/getTimeItems'
import { Input } from '@/shared/UI/Input'
import { CreateDealFormContext } from '@/shared/lib/context/createDealForm'
import React, { useContext } from 'react'
import { getTodayDate } from '@/components/SheduledCard/utils/getTodayDate'

export const SheduledCard = () => {
  const {
    jobDate,
    jobStartTime,
    jobEndTime,
    technician,
    onJobDateChange,
    onJobStartTimeChange,
    onJobEndTimeChange,
    onTechnicianChange
  } = useContext(CreateDealFormContext)

  return (
    <FormCard title="Sheduled">
      <Input type="date" value={jobDate} onChange={onJobDateChange} min={getTodayDate()} required full />
      <div className="flex row fieldGap">
        <select value={jobStartTime} onChange={onJobStartTimeChange} className='w-full'>
          {getTimeItems().map(({ value, name }) => {
            return <option key={value} value={value}>{name}</option>
          })}
        </select>
        <select value={jobEndTime} onChange={onJobEndTimeChange} className='w-full'>
          {getTimeItems().map(({ value, name }) => {
            return <option key={value} value={value}>{name}</option>
          })}
        </select>
      </div>
      <select value={technician} onChange={onTechnicianChange} className='w-full'>
        <option value="" disabled hidden>Select technician</option>
        <option value="Jon Doe">Jon Doe</option>
        <option value="Lorem Ipsum">Lorem Ipsum</option>
        <option value="Test Emploee">Test Emploee</option>
      </select>
    </FormCard>
  )
}