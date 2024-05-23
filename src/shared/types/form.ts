import { ChangeEvent, FormEvent } from "react"

export type FormFields = {
  firstName: string
  lastName: string
  phone: string
  email: string
  jobType: string
  jobSource: string
  jobComment?: string
  address: string
  city: string
  state: string
  zipCode: string
  area: string
  jobDate: string
  jobStartTime: string
  jobEndTime: string
  technician: string
  onFirstNameChange: (e: ChangeEvent<HTMLInputElement>) => void
  onLastNameChange: (e: ChangeEvent<HTMLInputElement>) => void
  onPhoneChange: (e: ChangeEvent<HTMLInputElement>) => void
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void
  onJobTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void
  onJobSourceChange: (e: ChangeEvent<HTMLSelectElement>) => void
  onJobCommentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onAddressChange: (e: ChangeEvent<HTMLInputElement>) => void
  onCityChange: (e: ChangeEvent<HTMLInputElement>) => void
  onStateChange: (e: ChangeEvent<HTMLInputElement>) => void
  onZipCodeChange: (e: ChangeEvent<HTMLInputElement>) => void
  onAreaChange: (e: ChangeEvent<HTMLSelectElement>) => void
  onJobDateChange: (e: ChangeEvent<HTMLInputElement>) => void
  onJobStartTimeChange: (e: ChangeEvent<HTMLSelectElement>) => void
  onJobEndTimeChange: (e: ChangeEvent<HTMLSelectElement>) => void
  onTechnicianChange: (e: ChangeEvent<HTMLSelectElement>) => void
  submitForm: (e: FormEvent<HTMLFormElement>) => void
  loading: boolean
}