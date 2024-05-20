import React, { useState } from 'react'
import OtpInput from 'react-otp-input'

export default function App() {
  const [otp, setOtp] = useState('')

  console.log(otp)

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      shouldAutoFocus={false}
      renderInput={(props) => (
        <input
          {...props}
          className="px-5 py-2.5 md:px-7 md:py-4 rounded mx-1"
        />
      )}
    />
  )
}
