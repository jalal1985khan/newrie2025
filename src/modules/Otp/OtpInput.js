import React, { useState } from 'react'
import OtpInput from 'react-otp-input'

export default function App() {
  const [otp, setOtp] = useState(['', '', '', ''])

  console.log(otp)

  return (
    <OtpInput
      value={otp.join('')}
      onChange={(value) => setOtp(value.split(''))}
      numInputs={4}
      isInputNum
      inputStyle={{
        width: '3rem',
        height: '3rem',
        margin: '0 0.2rem',
        fontSize: '1.2rem',
        borderRadius: '4px',
        border: '1px solid #ced4da',
      }}
      shouldAutoFocus={false}
      renderInput={(inputProps, index) => <input {...inputProps} key={index} />}
    />
  )
}
