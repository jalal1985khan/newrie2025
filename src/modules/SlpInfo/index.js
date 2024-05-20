import React from 'react'
import BackButton from '../../components/BackButton'

const SlpInfo = () => {
  const renderFirstnameField = () => (
    <input
      type="text"
      placeholder="First Name"
      className="w-1/2 px-2 py-3 rounded-md border-none"
    />
  )

  const renderLastnameField = () => (
    <input
      type="text"
      placeholder="Last Name"
      className="w-1/2 px-2 py-3 rounded-md border-none"
    />
  )

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

  const renderSlpEmailField = () => (
    <input
      type="text"
      placeholder="Enter SLP email"
      className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
    />
  )

  const renderIndustryField = () => (
    <select
      name="gender"
      id="gender"
      className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-none"
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
      />
    </div>
  )

  const renderCompanyField = () => (
    <input
      type="text"
      placeholder="Company Name (Optional)"
      className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
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
    ></textarea>
  )

  return (
    <div className="bg-[#210657] min-h-screen flex flex-col p-6">
      <BackButton title="" textColor="text-white" />
      <div className="flex justify-center my-auto">
        <form className="w-11/12 md:w-1/4 flex flex-col items-center space-y-4">
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
            className="bg-[#7F56D9] md:w-11/12 w-full py-3 text-white rounded"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  )
}

export default SlpInfo
