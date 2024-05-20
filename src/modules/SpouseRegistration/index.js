import React from 'react'
import RegistrationForm from '../../components/RegistrationForm'
import BackButton from '../../components/BackButton'

const SpouseRegistration = () => {
  return (
    <div className="bg-[#210657] min-h-screen flex flex-col p-6">
      <BackButton title="Spouse Registration" textColor="text-white" />
      <div className="flex justify-center my-auto">
        <RegistrationForm button="Add a Member" />
      </div>
    </div>
  )
}

export default SpouseRegistration
