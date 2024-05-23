'use client'

import React, { useState } from 'react'
import BackButton from '../../components/BackButton'
import { useLocation, useNavigate } from 'react-router-dom'

const MemberInfo = () => {
  const [memberInfo, setMemberInfo] = useState({
    gender: '',
    mobile: '',
    industry: '',
    company: '',
    gstno: '',
    invoiceDetails: '',
  })

  const location = useLocation()
  const navigate = useNavigate()
  const { isSLP } = location.state

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!memberInfo.gender) newErrors.gender = '*Gender is required'
    if (!memberInfo.mobile || !/^\d{10}$/.test(memberInfo.mobile))
      newErrors.mobile = '*A valid 10-digit mobile number is required'
    if (!memberInfo.industry) newErrors.industry = '*Industry is required'
    if (!memberInfo.company) newErrors.company = '*Company name is required'
    if (
      !memberInfo.gstno ||
      !/^([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1})$/.test(
        memberInfo.gstno
      )
    )
      newErrors.gstno = '*A valid GST number is required'
    if (!memberInfo.invoiceDetails)
      newErrors.invoiceDetails = '*Invoice details are required'

    return newErrors
  }

  // const handleMemberInfo = (e) => {
  //   e.preventDefault()

  //   const validationErrors = validate()
  //   setErrors(validationErrors)

  //   if (Object.keys(validationErrors).length === 0) {
  //     console.log('Form data is valid')
  //     console.log(memberInfo)
  //     setIsSubmitted(true)
  //     navigate(isSLP ? '/slp-info' : '/member-preferences')
  //     // Reset form after successful submission
  //     setMemberInfo({
  //       gender: '',
  //       mobile: '',
  //       industry: '',
  //       company: '',
  //       gstno: '',
  //       invoiceDetails: '',
  //     })
  //   } else {
  //     console.log('Form data is invalid')
  //     setIsSubmitted(false)
  //   }
  // }

  const handleMemberInfo = async (e) => {
    e.preventDefault()

    // Validate form data before sending
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      // Handle validation errors
      console.log('Validation errors:', validationErrors)
      return
    }

    const updatedMemberInfo = {
      eoid: 123456,
      gender: memberInfo.gender,
      mobile: memberInfo.mobile,
      industry: memberInfo.industry,
      company: memberInfo.company,
      gstno: memberInfo.gstno,
      companyaddr: memberInfo.invoiceDetails,
      spouseid: '10',
      regstatus: 'yes',
    }

    try {
      const response = await fetch('https://eoapi.ivistaz.co/api/rie-member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMemberInfo),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Form submitted successfully:', data)
        setIsSubmitted(true)
        navigate(isSLP ? '/slp-info' : '/member-preferences')
      } else {
        console.error('Error submitting form:', response.statusText)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const renderGenderField = () => (
    <div className={`space-y-1 ${errors.gender ? 'shake' : ''}`}>
      <select
        name="gender"
        id="gender"
        className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-none"
        value={memberInfo.gender}
        onChange={(e) =>
          setMemberInfo({ ...memberInfo, gender: e.target.value })
        }
      >
        <option value="" disabled>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
    </div>
  )

  const rendermobileField = () => (
    <div className={`space-y-1 ${errors.mobile ? 'shake' : ''}`}>
      <div className="flex gap-2 md:w-11/12 w-full">
        <div>
          <select
            name="country"
            id="countryCode"
            className=" rounded-md px-2 py-3 outline-none border-none"
          >
            <option value="male">+91</option>
            <option value="female">+1</option>
            <option value="female">+44</option>
            <option value="female">+61</option>
            <option value="female">+49</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full outline-none px-2 py-3 rounded-md border-none"
          value={memberInfo.mobile}
          onChange={(e) =>
            setMemberInfo({ ...memberInfo, mobile: e.target.value })
          }
        />
      </div>
      {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
    </div>
  )

  const renderIndustryField = () => (
    <div className={`space-y-1 ${errors.industry ? 'shake' : ''}`}>
      <select
        name="industry"
        id="industry"
        className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-none"
        onChange={(e) =>
          setMemberInfo({ ...memberInfo, industry: e.target.value })
        }
        value={memberInfo.industry}
      >
        <option value="" disabled>
          Industry
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      {errors.industry && (
        <p className="text-red-500 text-sm">{errors.industry}</p>
      )}
    </div>
  )

  const renderCompanyField = () => (
    <div className={`space-y-1 ${errors.company ? 'shake' : ''}`}>
      <input
        type="text"
        placeholder="Company Name"
        className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
        value={memberInfo.company}
        onChange={(e) =>
          setMemberInfo({ ...memberInfo, company: e.target.value })
        }
      />
      {errors.company && (
        <p className="text-red-500 text-sm">{errors.company}</p>
      )}
    </div>
  )

  const renderGSTField = () => (
    <div className={`space-y-1 ${errors.gstno ? 'shake' : ''}`}>
      <input
        type="text"
        placeholder="GST # if applicable"
        className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
        value={memberInfo.gstno}
        onChange={(e) =>
          setMemberInfo({ ...memberInfo, gstno: e.target.value })
        }
      />
      {errors.gstno && <p className="text-red-500 text-sm">{errors.gstno}</p>}
    </div>
  )

  const renderInvoiceDetails = () => (
    <div className={`space-y-1 ${errors.invoiceDetails ? 'shake' : ''}`}>
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="Invoicing Details"
        className="md:w-11/12 w-full px-2 py-3 outline-none rounded-md border-none"
        value={memberInfo.invoiceDetails}
        onChange={(e) =>
          setMemberInfo({ ...memberInfo, invoiceDetails: e.target.value })
        }
      ></textarea>
      {errors.invoiceDetails && (
        <p className="text-red-500 text-sm">{errors.invoiceDetails}</p>
      )}
    </div>
  )

  return (
    <div className="bg-[#210657] min-h-screen flex flex-col p-6">
      <BackButton title="Member Information" textColor="text-white" />
      <div className="flex justify-center my-auto">
        <form
          className="w-11/12 md:w-1/4 flex flex-col space-y-4"
          onSubmit={handleMemberInfo}
        >
          {renderGenderField()}
          {rendermobileField()}
          {renderIndustryField()}
          {renderCompanyField()}
          {renderGSTField()}
          {renderInvoiceDetails()}
          <button
            type="submit"
            className={`bg-[#7F56D9] md:w-11/12 w-full py-3 text-white rounded ${
              isSubmitted ? '' : ''
            }`}
            // onClick={handleNextClick}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  )
}

export default MemberInfo
