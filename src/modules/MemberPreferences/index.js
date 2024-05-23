import React from 'react'
import PreferencesForm from '../../components/PreferencesForm'
import BackButton from '../../components/BackButton'
import { useNavigate } from 'react-router-dom'

const MemberPreferences = () => {
  const navigate = useNavigate()

  const handleSubmit = (preferences) => {
    console.log(preferences)
    navigate('/dashboard')
  }
  return (
    <div className="bg-[#F9F6FF] min-h-screen flex flex-col p-6">
      <BackButton title="Member Preferences" textColor="text-black" />
      <div className="flex justify-center my-auto">
        <PreferencesForm handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default MemberPreferences
