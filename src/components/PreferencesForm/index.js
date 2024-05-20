import React from 'react'
import { interest } from '../../utils/menu'

const PreferencesForm = () => {
  const renderFlyingFrom = () => (
    <div className="space-y-1">
      <label htmlFor="flyingFrom" className="font-semibold">
        Flying From
      </label>
      <input
        type="email"
        id="flyingFrom"
        placeholder="Location"
        className="md:w-11/12 w-full outline-none px-2 py-3 rounded-md border-none drop-shadow-md"
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
      >
        <option value="" disabled selected>
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
      >
        <option value="" disabled selected>
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
          return (
            <li key={item.id} className="">
              <button className="flex items-center gap-1 text-sm font-thin border border-gray-300 rounded-3xl px-2 py-1">
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
        placeholder="Special request"
        className="md:w-11/12 w-full px-2 py-3 outline-none rounded-md border-none drop-shadow-md"
      ></textarea>
    </div>
  )

  return (
    <form className="w-11/12 md:w-1/4 space-y-4">
      {renderFlyingFrom()}
      {renderDietField()}
      {renderAllergiesField()}
      {renderShirtSize()}
      {renderInterests()}
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
