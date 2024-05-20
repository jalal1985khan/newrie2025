import React from 'react'
import OtpInput from './OtpInput'
import BackButton from '../../components/BackButton'

const Otp = () => {
  return (
    <div className="bg-[#210657] min-h-screen flex flex-col p-6">
      <BackButton title="OTP Verification" textColor="text-white" />
      <div className="self-center flex flex-col items-center w-10/12 md:w-1/4 text-center m-auto space-y-7">
        <div>
          <p className="text-white/80">OTP sent to your email.</p>
          <p className="text-white/80">Please enter the code below.</p>
        </div>
        <div>
          <OtpInput />
        </div>
        <div className="w-full">
          <button className="bg-[#7F56D9] w-9/12 py-3 text-white rounded">
            Verify
          </button>
        </div>
      </div>
    </div>
  )
}

export default Otp
