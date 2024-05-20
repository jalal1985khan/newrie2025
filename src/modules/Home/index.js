import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [validMember, setValidMember] = useState(true)
  const navigate = useNavigate()

  const onEnterEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleRegistration = async (e) => {
    e.preventDefault()
    if (email.includes('@')) {
      setValidEmail(true)
      const isEOMember = await fetchedData(email)
      if (!isEOMember) {
        setValidMember(false)
      } else {
        setValidMember(true)
        navigate('/otp')
      }
    } else {
      setValidEmail(false)
    }
  }

  const fetchedData = async (email) => {
    try {
      const response = await fetch('https://eoapi.ivistaz.co/api/eomembers')
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const jsonData = await response.json()
      console.log(jsonData.eomembers)
      const filteredData = jsonData.eomembers.find(
        (item) => item.email === email
      )
      console.log(filteredData)
      return filteredData
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="bg-[#210657] h-screen flex flex-col justify-center items-center">
      <div className="w-10/12 md:w-1/4 text-center space-y-10">
        <h2 className="text-white font-semibold text-xl">Welcome to</h2>
        <h1 className="text-white font-semibold text-6xl">RIE 2025</h1>
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            placeholder="Enter your email"
            className="p-3 focus:outline-none focus:ring-0 focus:border-none border-none  w-full rounded-md"
            onChange={onEnterEmail}
          />
          {!validEmail && (
            <p className="text-red-600 text-xs text-left">
              *Please enter valid email
            </p>
          )}
        </form>

        {!validMember && (
          <div className="bg-[#C15061] text-center font-semibold rounded-md p-3 space-y-3">
            <p className="text-white">
              We couldn't find your email, <br /> let's address this right away.
            </p>
            <p className="text-white">
              Please{' '}
              <span className="text-[#210657]">
                <button>Register here</button>
              </span>
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between w-48 px-4 mt-20 text-white text-xl font-semibold">
        <span>2025</span>
        <img src="/logo.png" alt="logo" className="" />
        <span className="text-[#CA4670]">SA</span>
        <span>RIE</span>
      </div>
      <div className="text-white">{validMember}</div>
    </div>
  )
}

export default Home
