'use client'

import React, { useState } from 'react'
import BackButton from '../../components/BackButton'
import {
  angleDown,
  angleUp,
  question,
  refund,
  signOut,
} from '../../utils/icons'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [profileMenu, setProfileMenu] = useState(false)
  const navigate = useNavigate()

  const handleProfileMenu = () => {
    setProfileMenu(!profileMenu)
  }

  return (
    <div className="lg:bg-slate-200  min-h-screen flex flex-col p-6 ">
      <div className="mb-4">
        <BackButton title="Dashboard" textColor="text-black" />
      </div>
      <div className="w-11/12 md:w-1/4 flex flex-col m-auto bg-[#FDFDFD] lg:p-4 rounded-xl">
        <div
          className="flex justify-between items-center px-3 py-4 w-full bg-[#F7F7F9] border border-[#C5C5C5] rounded-xl"
          onClick={handleProfileMenu}
        >
          <div className="flex items-center gap-2">
            <div className="bg-custom-gradient flex items-center justify-center rounded-full">
              <img src="/profile.png" alt="profile" className="w-8 h-8" />
            </div>
            <h1 className="text-lg">Narayan</h1>
          </div>
          <div>
            {profileMenu ? <span>{angleUp}</span> : <span>{angleDown}</span>}
          </div>
        </div>

        <div className="bg-[#380C72] flex relative justify-center items-end pt-20 pb-10 my-10 rounded-xl">
          <div className="text-center space-y-4">
            <h2 className="text-[#FEFEFE] text-xl font-semibold">
              We are so excited!
            </h2>
            <button
              className="bg-[#FEFEFE] rounded-3xl px-3 py-2 border border-[#0058FA]"
              onClick={() => navigate('/payment-gateway')}
            >
              Click to Register
            </button>
          </div>
          <div
            className={`${
              profileMenu ? 'block' : 'hidden'
            } bg-white rounded-2xl p-3 absolute -bottom-14 drop-shadow-2xl w-11/12 space-y-4`}
          >
            <div className="flex items-center gap-2">
              <div className="bg-custom-gradient flex items-center justify-center rounded-full">
                <img src="/profile.png" alt="profile" className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-lg">Narayan</h1>
                <p className="text-[#999]">narayan@gmail.com</p>
              </div>
            </div>
            <hr className="w-full" />
            <div className="flex items-center gap-2">
              <span className="text-lg">{refund}</span>
              <p className="text-lg">Refund / Transfer</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">{question}</span>
              <p className="text-lg">Add SLP</p>
            </div>
            <hr className="w-full" />
            <div className="flex items-center gap-2">
              <span className="text-lg">{signOut}</span>
              <p className="text-lg">Sign Out</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-xl font-semibold">About RIE 2025</h1>
          <img src="/event.jpeg" alt="event" className="w-full" />
          <h2 className="text-lg font-semibol ">
            Once in a lifetime experience
          </h2>
          <p className="text-sm text-[#646464]">
            A regional event that provides an opportunity for SAsian
            entrepreneurs to meet and connect, peer to peer learning. All this
            around intense learning and phenomenal parties.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
