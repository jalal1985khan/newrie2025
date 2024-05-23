import React, { useState } from 'react'
import BackButton from '../../components/BackButton'
import { useNavigate } from 'react-router-dom'

const SlpInfo = () => {
  const [slpInfo, setSLPInfo] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    slpEmail: '',
    mobileNumber: '',
    industry: '',
    companyName: '',
    invoiceDetails: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const validate = () => {
    const newErrors = {}
    // Add your validation logic here
    if (!slpInfo.firstName) newErrors.firstName = '*First name is required'
    if (!slpInfo.lastName) newErrors.lastName = '*Last name is required'
    if (!slpInfo.gender) newErrors.gender = '*Gender is required'
    if (
      !slpInfo.slpEmail ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(slpInfo.slpEmail)
    )
      newErrors.slpEmail = '*Valid email is required'
    if (!slpInfo.mobileNumber || !/^\d{10}$/.test(slpInfo.mobileNumber))
      newErrors.mobileNumber = '*A valid 10-digit mobile number is required'

    return newErrors
  }

  const handleSLPInfo = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data is valid')
      console.log(slpInfo)
      setIsSubmitted(true)
      navigate('/slp-preferences')
      // Reset form after successful submission
      setSLPInfo({
        firstName: '',
        lastName: '',
        gender: '',
        slpEmail: '',
        mobileNumber: '',
        industry: '',
        companyName: '',
        invoiceDetails: '',
      })
    } else {
      console.log('Form data is invalid')
      setIsSubmitted(false)
    }
  }

  const renderFirstnameField = () => (
    <div className={`w-1/2 space-y-1 ${errors.gender ? 'shake' : ''}`}>
      <input
        type="text"
        placeholder="First Name"
        className="w-full px-2 py-3 rounded-md border-none"
        onChange={(e) => setSLPInfo({ ...slpInfo, firstName: e.target.value })}
      />
      {errors.firstName && (
        <p className="text-red-500 text-xs">{errors.firstName}</p>
      )}
    </div>
  )

  const renderLastnameField = () => (
    <div className={`w-1/2 space-y-1 ${errors.gender ? 'shake' : ''}`}>
      <input
        type="text"
        placeholder="Last Name"
        className="w-full px-2 py-3 rounded-md border-none"
        onChange={(e) => setSLPInfo({ ...slpInfo, lastName: e.target.value })}
      />
      {errors.lastName && (
        <p className="text-red-500 text-xs">{errors.lastName}</p>
      )}
    </div>
  )

  const renderGenderField = () => (
    <div className={`space-y-1 ${errors.gender ? 'shake' : ''}`}>
      <select
        name="gender"
        id="gender"
        className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-none"
        onChange={(e) => setSLPInfo({ ...slpInfo, gender: e.target.value })}
      >
        <option value="" disabled selected>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
    </div>
  )

  const renderSlpEmailField = () => (
    <div className={`space-y-1 ${errors.gender ? 'shake' : ''}`}>
      <input
        type="text"
        placeholder="Enter SLP email"
        className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
        onChange={(e) => setSLPInfo({ ...slpInfo, slpEmail: e.target.value })}
      />
      {errors.slpEmail && (
        <p className="text-red-500 text-xs">{errors.slpEmail}</p>
      )}
    </div>
  )

  const renderIndustryField = () => (
    <select
      name="gender"
      id="gender"
      className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-none"
      onChange={(e) => setSLPInfo({ ...slpInfo, industry: e.target.value })}
    >
      <option value="" disabled selected>
        Industry (Optional)
      </option>
      <option value="male">1</option>
      <option value="female">2</option>
    </select>
  )

  const renderMobileNumberField = () => (
    <div className="flex gap-2 md:w-11/12 md:w-11/12 w-full">
      <div>
        <select
          name="country"
          id="countryCode"
          className="rounded-md px-2 py-3 outline-none border-none"
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
        placeholder="SLP Mobile Number"
        className="w-full outline-none px-2 py-3 rounded-md border-none"
        onChange={(e) =>
          setSLPInfo({ ...slpInfo, mobileNumber: e.target.value })
        }
      />
    </div>
  )

  const renderCompanyField = () => (
    <input
      type="text"
      placeholder="Company Name (Optional)"
      className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
      onChange={(e) => setSLPInfo({ ...slpInfo, companyName: e.target.value })}
    />
  )

  const renderInvoiceDetails = () => (
    <textarea
      name=""
      id=""
      cols="30"
      rows="4"
      placeholder="Invoicing Details (Optional)"
      className="md:w-11/12 w-full px-2 py-3 outline-none rounded-md border-none"
      onChange={(e) =>
        setSLPInfo({ ...slpInfo, invoiceDetails: e.target.value })
      }
    ></textarea>
  )

  return (
    <div className="bg-[#210657] min-h-screen flex flex-col p-6">
      <BackButton title="" textColor="text-white" />
      <div className="flex justify-center my-auto">
        <form
          className="w-11/12 md:w-1/4 flex flex-col space-y-4"
          onSubmit={handleSLPInfo}
        >
          <h1 className="text-white font-semibold text-lg">Add Your SLP</h1>
          <div className="flex gap-3 md:w-11/12 w-full">
            {renderFirstnameField()}
            {renderLastnameField()}
          </div>
          {renderGenderField()}
          {renderSlpEmailField()}
          {renderMobileNumberField()}
          {renderIndustryField()}
          {renderCompanyField()}
          {renderInvoiceDetails()}

          <button
            type="submit"
            className={`bg-[#7F56D9] md:w-11/12 w-full py-3 text-white rounded ${
              isSubmitted ? '' : ''
            }`}
            // onClick={() => navigate('/slp-preferences')}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  )
}

export default SlpInfo
