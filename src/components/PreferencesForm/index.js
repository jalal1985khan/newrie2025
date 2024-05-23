'use client'

import React, { useState } from 'react'
import { interest } from '../../utils/menu'

const PreferencesForm = ({ handleSubmit }) => {
  const [selectedInterest, setSelectedInterest] = useState([])
  const [preferences, setPreferences] = useState({
    flyingFrom: '',
    allergies: '',
    diet: '',
    shirtSize: '',
    interest: [],
    specialRequest: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const validationErrors = {}
    if (!preferences.flyingFrom)
      validationErrors.flyingFrom = '*Flying from is required'
    if (!preferences.diet) validationErrors.diet = '*Diet is required'
    if (!preferences.shirtSize)
      validationErrors.shirtSize = '*Shirt size is required'
    if (preferences.interest.length === 0)
      validationErrors.interest = '*At least one interest is required'
    return validationErrors
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      handleSubmit(preferences)
      setSelectedInterest([])
      setPreferences({
        flyingFrom: '',
        allergies: '',
        diet: '',
        shirtSize: '',
        interest: [],
        specialRequest: '',
      })
      setIsSubmitted(true)
      console.log(isSubmitted)
    } else {
      setIsSubmitted(false)
    }
  }

  // const handleFormSubmit = (e) => {
  //   e.preventDefault()
  //   handleSubmit(preferences)
  //   setSelectedInterest([])
  //   setPreferences({
  //     flyingFrom: '',
  //     allergies: '',
  //     diet: '',
  //     shirtSize: '',
  //     interest: [],
  //     specialRequest: '',
  //   })
  // }

  const handleInterestSelect = (selected) => {
    if (!selectedInterest.includes(selected)) {
      const updatedSelectedInterest = [...selectedInterest, selected]
      setSelectedInterest(updatedSelectedInterest)
      setPreferences((prevPreferences) => ({
        ...prevPreferences,
        interest: updatedSelectedInterest,
      }))
    }
  }

  const renderFlyingFrom = () => (
    <div className="space-y-1">
      <label htmlFor="flyingFrom" className="font-semibold">
        Flying From
      </label>
      <input
        type="text"
        id="flyingFrom"
        placeholder="Location"
        className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none drop-shadow-md"
        onChange={(e) =>
          setPreferences({ ...preferences, flyingFrom: e.target.value })
        }
        value={preferences.flyingFrom}
      />
    </div>
  )

  const renderAllergiesField = () => (
    <div>
      <input
        type="allergies"
        id="allergies"
        placeholder="Allergies if any"
        className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none"
        onChange={(e) =>
          setPreferences({ ...preferences, allergies: e.target.value })
        }
        value={preferences.allergies}
      />
    </div>
  )

  const renderDietField = () => (
    <div className="space-y-1">
      <label htmlFor="diet" className="font-semibold">
        Diet Preferences
      </label>
      <select
        name="diet"
        id="diet"
        className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-gray-200 drop-shadow-sm"
        onChange={(e) =>
          setPreferences({ ...preferences, diet: e.target.value })
        }
        value={preferences.diet}
      >
        <option value="" disabled>
          Please select your option
        </option>
        <option value="1">Veg</option>
        <option value="2">Non-Veg</option>
      </select>
    </div>
  )

  const renderShirtSize = () => (
    <div className="space-y-1">
      <label htmlFor="diet" className="font-semibold">
        Shirt Size
      </label>
      <select
        name="diet"
        id="diet"
        className="md:w-11/12 w-full rounded-md px-2 py-3 outline-none border-gray-200 drop-shadow-sm"
        onChange={(e) =>
          setPreferences({ ...preferences, shirtSize: e.target.value })
        }
        value={preferences.shirtSize}
      >
        <option value="" disabled>
          Size
        </option>
        <option value="1">L</option>
        <option value="2">XL</option>
      </select>
    </div>
  )

  const renderInterests = () => (
    <div className="space-y-1">
      <label htmlFor="interest" className="font-semibold">
        Interests
      </label>
      <ul className="flex flex-wrap md:w-11/12 w-full gap-3">
        {interest.map((item) => {
          const isSelected = selectedInterest.includes(item.interest)
          return (
            <li key={item.id} className="">
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-thin border border-gray-300 rounded-3xl px-2 py-1 ${
                  isSelected ? 'bg-[#380C72] text-white' : 'bg-transparent'
                }`}
                onClick={() => handleInterestSelect(item.interest)}
              >
                {item.icon}
                {item.interest}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const renderSpecialRequest = () => (
    <div className="space-y-1">
      <label htmlFor="specialRequest" className="font-semibold">
        Special request
      </label>
      <textarea
        name="specialRequest"
        id="specialRequest"
        cols="30"
        rows="4"
        placeholder="Special request (Optional)"
        className="md:w-11/12 w-full px-2 py-3 outline-none rounded-md border-none drop-shadow-md"
        onChange={(e) =>
          setPreferences({ ...preferences, specialRequest: e.target.value })
        }
        value={preferences.specialRequest}
      ></textarea>
    </div>
  )

  return (
    <form className="w-11/12 md:w-1/4 space-y-4" onSubmit={handleFormSubmit}>
      <div>
        {renderFlyingFrom()}
        {errors.flyingFrom && (
          <p className="text-red-500">{errors.flyingFrom}</p>
        )}
      </div>
      <div>
        {renderDietField()}
        {errors.diet && <p className="text-red-500">{errors.diet}</p>}
      </div>
      {renderAllergiesField()}
      <div>
        {renderShirtSize()}
        {errors.shirtSize && <p className="text-red-500">{errors.shirtSize}</p>}
      </div>
      <div>
        {renderInterests()}
        {errors.interest && <p className="text-red-500">{errors.interest}</p>}
      </div>
      {renderSpecialRequest()}
      <button
        type="submit"
        className="bg-[#653BC0] md:w-11/12 w-full py-3 text-white rounded"
      >
        Save Preferences
      </button>
    </form>
  )
}

export default PreferencesForm
