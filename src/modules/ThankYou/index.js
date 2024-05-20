import React from 'react'

const ThankYou = () => {
  return (
    <div className="bg-[#F9F6FF] h-screen flex justify-center items-center">
      <div className="space-y-9 w-11/12 md:w-1/4 flex flex-col justify-center items-center">
        <div className="text-center space-y-5">
          <h1 className="text-2xl font-semibold text-[#3F3D56]">Thank you</h1>
          <p className="text-[#4E4B6680]">
            We have received your request and will contact you soon with more
            details. Watch your inbox!
          </p>
          <p className="text-[#4E4B6680]">
            For any queries and support please write to: rie@eobangalore.com
          </p>
        </div>
        <button className="bg-[#0E9D58] w-10/12 py-2 text-white font-semibold rounded-3xl">
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default ThankYou
