import { createDealFields } from "../services/createDealFields"
import { createDeal } from "../services/createDeal"
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react"
import { getDealFields } from "../services/getDealFields"
import { fieldsExist } from "@/components/CreateDealForm/utils/filedsExist"
import { DEALS } from "@/shared/const/pipedriveEndpoints"
import { $fetch } from "@/shared/api/fetch"

export const useCreateDealForm = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [jobType, setJobType] = useState<string>('')
  const [jobSource, setJobSource] = useState<string>('')
  const [jobComment, setJobComment] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [zipCode, setZipCode] = useState<string>('')
  const [area, setArea] = useState<string>('')
  const [jobDate, setJobDate] = useState<string>('')
  const [jobStartTime, setJobStartTime] = useState<string>('8')
  const [jobEndTime, setJobEndTime] = useState<string>('8')
  const [technician, setTechnician] = useState<string>('')
  const jobNumber = String(Date.now()).slice(-5)
  const [loading, setLoading] = useState<boolean>(false)

  const fieldsToUpdateMap = {
    'First Name': firstName,
    'Last Name': lastName,
    Phone: phone,
    Email: email,
    'Job type': jobType,
    'Job source': jobSource,
    'Job comment': jobComment,
    'Address': address,
    City: city,
    State: state,
    'Zip code': zipCode,
    Area: area,
    'Job date': jobDate,
    'Job start time': jobStartTime,
    'Job end time': jobEndTime,
    'Job number': jobNumber,
    'Job ID': jobNumber,
  }

  const onFirstNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }, [])

  const onLastNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }, [])

  const onPhoneChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }, [])

  const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const onJobTypeChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setJobType(e.target.value)
  }, [])

  const onJobSourceChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setJobSource(e.target.value)
  }, [])

  const onJobCommentChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setJobComment(e.target.value)
  }, [])

  const onAddressChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }, [])

  const onCityChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }, [])

  const onStateChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, [])

  const onZipCodeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value)
  }, [])

  const onAreaChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setArea(e.target.value)
  }, [])

  const onJobDateChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setJobDate(e.target.value)
  }, [])

  const onJobStartTimeChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setJobStartTime(e.target.value)
  }, [])

  const onJobEndTimeChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setJobEndTime(e.target.value)
  }, [])

  const onTechnicianChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setTechnician(e.target.value)
  }, [])

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fieldsToUpdatePromises: Promise<Response>[] = []

    try {
      setLoading(true)
      const { data: { id: dealId } } = await createDeal(jobNumber)

      const { data: existedDealFields } = await getDealFields()

      const dealFields = fieldsExist(existedDealFields)
        ? existedDealFields
        // @ts-ignore
        : (await createDealFields()).map(res => res.data)

      dealFields.forEach(({ key, id, name }) => {
        if (fieldsToUpdateMap.hasOwnProperty(name)) {
          const fieldName = name as keyof typeof fieldsToUpdateMap
          const promise = $fetch(`${DEALS}/${dealId}`, {
            method: 'PUT',
            body: JSON.stringify({
              [key]: fieldsToUpdateMap[fieldName]
            })
          })
          fieldsToUpdatePromises.push(promise)
        }

        const technicianNameArr = name.split(' ')

        if (technicianNameArr[1]?.toLowerCase() == 'technician' && technicianNameArr[0] == area) {
          const promise = $fetch(`${DEALS}/${dealId}`, {
            method: 'PUT',
            body: JSON.stringify({
              [key]: technician
            })
          })
          fieldsToUpdatePromises.push(promise)
        }
      })

      const updateResponse = await Promise.all(fieldsToUpdatePromises)
      await Promise.all(updateResponse.map(res => res.json()))
    } catch (err) {
      console.warn('Submit Error: ', err)
    } finally {
      setLoading(false)
    }
  }

  return {
    firstName,
    lastName,
    phone,
    email,
    jobType,
    jobSource,
    jobComment,
    address,
    city,
    state,
    zipCode,
    area,
    jobDate,
    jobStartTime,
    jobEndTime,
    jobNumber,
    technician,
    onFirstNameChange,
    onLastNameChange,
    onPhoneChange,
    onEmailChange,
    onJobTypeChange,
    onJobSourceChange,
    onJobCommentChange,
    onAddressChange,
    onCityChange,
    onStateChange,
    onZipCodeChange,
    onAreaChange,
    onJobDateChange,
    onJobStartTimeChange,
    onJobEndTimeChange,
    onTechnicianChange,
    submitForm,
    loading,
  }
}
