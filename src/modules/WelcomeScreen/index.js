'use client'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../../components/BackButton'

const WelcomeScreen = () => {
  const [isSLP, setIsSLP] = useState(false)
  const navigate = useNavigate()

  const handleMemberClick = () => {
    setIsSLP(false)
    navigate('/member-info', { state: { isSLP: false } })
    console.log(isSLP)
  }

  const handleMemberSLPClick = () => {
    setIsSLP(true)
    navigate('/member-info', { state: { isSLP: true } })
    console.log(isSLP)
  }

  return (
    <div className="bg-[#210657] h-screen flex flex-col p-6">
      <BackButton title="" textColor="" />
      <div className="flex justify-center my-auto">
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-2xl text-white">Who is attending?</h1>
          <button
            className="bg-white px-3 py-2 rounded-3xl"
            //onClick={() => navigate('/member-info')}
            onClick={handleMemberClick}
          >
            Member
          </button>
          <button
            className="bg-white px-3 py-2 rounded-3xl"
            onClick={handleMemberSLPClick}
          >
            Member + SLP
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen
