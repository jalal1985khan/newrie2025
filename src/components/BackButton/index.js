import React from 'react'
import { back } from '../../utils/icons'
import { useNavigate } from 'react-router-dom'

const BackButton = ({ title, textColor }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <button onClick={handleNavigate} className="flex gap-2 items-center">
      <div className="rounded-full p-2 bg-white text-xl">{back}</div>
      <p className={`${textColor} font-semibold`}>{title}</p>
    </button>
  )
}

export default BackButton
