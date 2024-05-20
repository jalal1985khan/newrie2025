import React, { useState } from 'react'

const RegistrationForm = ({ button }) => {
  const [inputType, setInputType] = useState('text')

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

  const renderEmailField = () => (
    <input
      type="email"
      placeholder="Enter your email"
      className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
    />
  )

  const renderMobileNumberField = () => (
    <input
      type="text"
      placeholder="Mobile Number"
      className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
    />
  )

  const renderRegionField = () => (
    <select
      name="region"
      id="region"
      className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-none"
    >
      <option value="" disabled selected>
        Region
      </option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  )

  const renderChapterField = () => (
    <select
      name="chapter"
      id="chapter"
      className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-none"
    >
      <option value="" disabled selected>
        Chapter
      </option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  )

  const renderJoinedDate = () => (
    <input
      type={inputType}
      placeholder="Joined Date"
      className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
      onFocus={() => setInputType('date')}
    ></input>
  )

  return (
    <form className="w-11/12 md:w-1/4 flex flex-col justify-center items-center space-y-4">
      <div className="flex gap-3 md:w-11/12 w-full">
        {renderFirstnameField()}
        {renderLastnameField()}
      </div>
      {renderEmailField()}
      {renderMobileNumberField()}
      {renderRegionField()}
      {renderChapterField()}
      {renderJoinedDate()}
      <button
        type="submit"
        className="bg-[#7F56D9] md:w-11/12 w-full py-3 text-white rounded"
      >
        {button}
      </button>
    </form>
  )
}

export default RegistrationForm
