import React from 'react'
import PreferencesForm from '../../components/PreferencesForm'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../components/BackButton'

const SlpPreferences = () => {
  const navigate = useNavigate()

  const handleSubmit = (preferences) => {
    console.log(preferences)
    navigate('/member-preferences')
  }
  return (
    <div className="bg-[#F9F6FF] min-h-screen flex flex-col p-6">
      <BackButton title="SLP Preferences" textColor="text-black" />
      <div className="flex justify-center my-auto">
        <PreferencesForm handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default SlpPreferences
