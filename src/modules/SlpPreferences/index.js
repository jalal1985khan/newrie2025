import React from 'react'
import PreferencesForm from '../../components/PreferencesForm'

const SlpPreferences = () => {
  return (
    <div className="bg-[#F9F6FF] min-h-screen flex flex-col justify-center items-center pt-4 pb-11">
      <h1 className="text-[#3F3D56] font-semibold text-2xl mb-4">
        SLP Preferences
      </h1>
      <PreferencesForm />
    </div>
  )
}

export default SlpPreferences
