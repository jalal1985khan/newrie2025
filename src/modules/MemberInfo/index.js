import React from 'react'
import BackButton from '../../components/BackButton'

const MemberInfo = () => {
  const renderGenderField = () => (
    <select
      name="gender"
      id="gender"
      className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-none"
    >
      <option value="" disabled selected>
        Gender
      </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  )

  const renderMobileNumberField = () => (
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
      />
    </div>
  )

  const renderIndustryField = () => (
    <select
      name="industry"
      id="industry"
      className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-none"
    >
      <option value="" disabled selected>
        Industry
      </option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  )

  const renderCompanyField = () => (
    <input
      type="text"
      placeholder="Company Name"
      className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
    />
  )

  const renderGSTField = () => (
    <input
      type="text"
      placeholder="GST # if applicable"
      className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
    />
  )

  const renderInvoiceDetails = () => (
    <textarea
      name=""
      id=""
      cols="30"
      rows="4"
      placeholder="Invoicing Details"
      className="md:w-11/12 w-full px-2 py-3 outline-none rounded-md border-none"
    ></textarea>
  )

  return (
    <div className="bg-[#210657] min-h-screen flex flex-col p-6">
      <BackButton title="Member Information" textColor="text-white" />
      <div className="flex justify-center my-auto">
        <form className="w-11/12 md:w-1/4 flex flex-col items-center space-y-4">
          {renderGenderField()}
          {renderMobileNumberField()}
          {renderIndustryField()}
          {renderCompanyField()}
          {renderGSTField()}
          {renderInvoiceDetails()}
          <button
            type="submit"
            className="bg-[#7F56D9] md:w-11/12 w-full py-3 text-white rounded"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  )
}

export default MemberInfo
