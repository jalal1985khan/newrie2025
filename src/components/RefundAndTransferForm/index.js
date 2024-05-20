import React from 'react'

const RefundAndTransferForm = ({ button }) => {
  const renderFirstnameField = () => (
    <input
      type="text"
      placeholder="First Name"
      id="name"
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
      placeholder="Enter tranferee email"
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

  const renderCommentField = () => (
    <input
      type="text"
      placeholder="Comment"
      className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
    />
  )

  const renderReasonForTransfer = () => (
    <input
      type="text"
      placeholder="Reason for transfer"
      className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
    />
  )

  return (
    <>
      <form className="w-11/12 md:w-1/4 flex flex-col justify-center items-center space-y-4 mb-4">
        <div className="flex gap-3 md:w-11/12 w-full">
          {renderFirstnameField()}
          {renderLastnameField()}
        </div>
        {renderEmailField()}
        {renderReasonForTransfer()}
      </form>

      <form className="w-11/12 md:w-1/4 flex flex-col justify-center items-center space-y-4">
        <div className="flex flex-col items-center">
          <label
            htmlFor="name"
            className="text-white font-semibold self-start px-4 py-2"
          >
            Transfer to:
          </label>
          <div className="flex gap-3 md:w-11/12 w-full">
            {renderFirstnameField()}
            {renderLastnameField()}
          </div>
        </div>
        {renderEmailField()}
        {renderChapterField()}
        {renderMobileNumberField()}
        {renderCommentField()}
        <button
          type="submit"
          className="bg-[#7F56D9] md:w-11/12 w-full py-3 text-white rounded"
        >
          {button}
        </button>
      </form>
    </>
  )
}

export default RefundAndTransferForm
