import React from 'react'

const WelcomeScreen = () => {
  return (
    <div className="bg-[#210657] h-screen flex justify-center">
      <div className="flex flex-col justify-center space-y-5">
        <h1 className="text-2xl text-white">Who is attending?</h1>
        <button className="bg-white px-3 py-2 rounded-3xl">Member</button>
        <button className="bg-white px-3 py-2 rounded-3xl">Member + SLP</button>
      </div>
    </div>
  )
}

export default WelcomeScreen
