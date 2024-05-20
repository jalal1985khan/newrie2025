import React from 'react'
import BackButton from '../../components/BackButton'
import RefundAndTransferForm from '../../components/RefundAndTransferForm'

const RefundAndTransfer = () => {
  return (
    <div className="bg-[#210657] min-h-screen flex flex-col p-6">
      <BackButton title="Refund And Transfer" textColor="text-white" />
      <div className="flex flex-col items-center justify-center my-auto">
        <RefundAndTransferForm button="Initiate Transfer/Refund" />
      </div>
    </div>
  )
}

export default RefundAndTransfer
