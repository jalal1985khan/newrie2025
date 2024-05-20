import React from 'react'

const PaymentGateway = () => {
  const renderVoucher = () => (
    <div className="w-11/12 bg-white flex items-center gap-8 px-8 py-5 drop-shadow-md rounded mb-6">
      <div className="pe-9 py-3 border-dashed border-r-4">
        <img src="/gift.png" className="w-12 h-12" alt="gift" />
      </div>
      <div className="text-center space-y-1">
        <h2 className="font-semibold text-2xl">$ 500</h2>
        <button className="bg-[#612ADB] text-white px-5 py-1 rounded-sm">
          Claim
        </button>
      </div>
    </div>
  )

  const renderPaymentDetails = () => (
    <div className="w-11/12 p-3 flex flex-col space-y-3 rounded-lg border border-gray-300 bg-gradient-to-r from-purple-500 to-indigo-500 backdrop-blur-sm">
      <h2 className="text-white text-xl font-semibold">Payment Details</h2>
      <div>
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-200">Member Fee</p>
          <p className="text-gray-200">1,00,000</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-200">SLP Fee</p>
          <p className="text-gray-200">75,000</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-200">GST:</p>
          <p className="text-gray-200">31,500</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-xl text-white font-semibold">Total Amount</p>
          <p className="text-2xl text-white font-semibold">₹ 2,06,500</p>
        </div>
      </div>
    </div>
  )

  const renderPaymentMethod1 = () => (
    <div className="w-11/12 bg-white flex items-center justify-between p-4 drop-shadow rounded-lg mb-6">
      <div className="flex items-center gap-3">
        <input type="radio" name="payment" id="paymentMethod1" />
        <label htmlFor="paymentMethod1" className="font-semibold text-xl">
          Stripe
        </label>
      </div>
      <img src="/StripeLogo.png" className="h-5" alt="" />
    </div>
  )

  const renderPaymentMethod2 = () => (
    <div className="w-11/12 bg-white flex items-center justify-between p-4 drop-shadow rounded-lg mb-6">
      <div className="flex items-center gap-3">
        <input type="radio" name="payment" id="paymentMethod2" />
        <label htmlFor="paymentMethod2" className="font-semibold text-xl">
          Razorpay
        </label>
      </div>
      <img src="/RazorpayLogo.png" className="h-4" alt="" />
    </div>
  )

  return (
    <div className="bg-[#F9F6FF] min-h-screen flex flex-col justify-center items-center pt-6">
      <h1 className="text-[#3F3D56] text-2xl font-bold mb-5">Voucher</h1>
      <div className="w-11/12 md:w-1/4 flex flex-col items-center">
        {renderVoucher()}
        {renderPaymentDetails()}
        <hr className="w-full bg-indigo-700 bg-opacity-20 mt-3" />
      </div>
      <h1 className="text-[#3F3D56] text-2xl font-bold my-5">Payment Method</h1>
      <div className="w-11/12 md:w-1/4 flex flex-col items-center">
        {renderPaymentMethod1()}
        {renderPaymentMethod2()}
      </div>
      <div className="bg-white p-6 rounded-t-2xl md:rounded-2xl drop-shadow-md w-full md:w-1/4">
        <button className="rounded-3xl bg-[#653BC0] py-2 w-full text-lg text-white">
          Proceed to Pay
        </button>
      </div>
    </div>
  )
}

export default PaymentGateway
