import { FormCard } from '@/components/FormCard/FormCard'
import { Input } from '@/shared/UI/Input'
import { CreateDealFormContext } from '@/shared/lib/context/createDealForm'
import React, { useContext } from 'react'

export const ServiceLocationCard = () => {
  const {
    address,
    city,
    state,
    zipCode,
    area,
    onAddressChange,
    onCityChange,
    onStateChange,
    onZipCodeChange,
    onAreaChange
  } = useContext(CreateDealFormContext)

  return (
    <FormCard title="Service location">
      <Input placeholder='Address' value={address} onChange={onAddressChange} required full />
      <Input placeholder='City' value={city} onChange={onCityChange} required full />
      <Input placeholder='State' value={state} onChange={onStateChange} required full />
      <div className="flex row fieldGap">
        <Input placeholder="Zip code" value={zipCode} onChange={onZipCodeChange} pattern="^[0-9]*$" required full />
        <select className="w-full" value={area} onChange={onAreaChange}>
          <option value="" disabled hidden>Select area</option>
          <option value="Tampa">Tampa</option>
          <option value="Miami">Miami</option>
          <option value="Arizona">Arizona</option>
          <option value="Florida">Florida</option>
        </select>
      </div>
    </FormCard>
  )
}