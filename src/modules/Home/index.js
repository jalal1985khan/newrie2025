import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [validMember, setValidMember] = useState(true)
  const [token, setToken] = useState(Cookies.get('token') || null)
  const navigate = useNavigate()

  const onEnterEmail = (e) => {
    setEmail(e.target.value)
  }

  const authenticateUser = async () => {
    try {
      const authResponse = await fetch('https://eoapi.ivistaz.co/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'kallol@ivistasolutions.com',
          password: 'ivista@2023',
        }),
      })

      if (!authResponse.ok) {
        throw new Error('Failed to authenticate')
      }

      const authData = await authResponse.json()
      setToken(authData.token)
      console.log(token)
      Cookies.set('token', authData.token, { expires: 1, path: '' }) // expires in 1 day
      return authData.token
    } catch (error) {
      console.error(error.message)
      return null
    }
  }

  const handleRegistration = async (e) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setValidEmail(false)
      return
    }

    setValidEmail(true)

    const token = await authenticateUser()
    if (!token) {
      console.error('Token not available')
      return
    }

    const isEOMember = await fetchedData(email, token)

    if (!isEOMember) {
      setValidMember(false)
    } else {
      setValidMember(true)
      navigate('/otp')
    }
  }

  const fetchedData = async (email) => {
    try {
      const response = await fetch('https://eoapi.ivistaz.co/api/eomembers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const jsonData = await response.json()
      console.log(jsonData)
      const filteredData = jsonData.eomembers.find(
        (item) => item.email === email
      )
      return filteredData
    } catch (error) {
      console.error(error.message)
      return null
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
