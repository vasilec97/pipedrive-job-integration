import { FormCard } from '@/components/FormCard/FormCard'
import { CreateDealFormContext } from '@/shared/lib/context/createDealForm'
import React, { useContext } from 'react'

export const JobDetailsCard = () => {
  const {
    jobType,
    jobSource,
    jobComment,
    onJobTypeChange,
    onJobSourceChange,
    onJobCommentChange
  } = useContext(CreateDealFormContext)

  return (
    <FormCard title="Job details">
      <select className="w-full" value={jobType} onChange={onJobTypeChange} required>
        <option value="" disabled hidden>Select job type</option>
        <option value="Recall manager">Recall Manager</option>
        <option value="Administrator">Administrator</option>
        <option value="Another Manager">Another Manager</option>
      </select>
      <select className="w-full" value={jobSource} onChange={onJobSourceChange} required>
        <option value="" disabled hidden>Select job source</option>
        <option value="CD Company">CD Company</option>
        <option value="CV Company">CV Company</option>
        <option value="LTD Company">LTD Company</option>
      </select>
      <textarea className="w-full" value={jobComment} onChange={onJobCommentChange} placeholder='Job description (optional)' maxLength={200} />
    </FormCard>
  )
}