import React from 'react'
import BackButton from '../../components/BackButton'
import RegistrationForm from '../../components/RegistrationForm'

const MemberRegistration = () => {
  return (
    <div className="bg-[#210657] min-h-screen flex flex-col p-6">
      <BackButton title="Member Registration" textColor="text-white" />
      <div className="flex justify-center my-auto">
        <RegistrationForm button="Submit" />
      </div>
    </div>
  )
}

export default MemberRegistration
