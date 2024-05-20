import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './modules/Home'
import Otp from './modules/Otp'
import SlpInfo from './modules/SlpInfo'
import MemberInfo from './modules/MemberInfo'
import MemberRegistration from './modules/MemberRegistration'
import WelcomeScreen from './modules/WelcomeScreen'
import SpouseRegistration from './modules/SpouseRegistration'
import MemberPreferences from './modules/MemberPreferences'
import SlpPreferences from './modules/SlpPreferences'
import PaymentGateway from './modules/PaymentGateway'
import Dashboard from './modules/Dashboard'
import RefundAndTransfer from './modules/RefundAndTransfer'
import PaymentSuccessful from './modules/PaymentSuccessful'
import ThankYou from './modules/ThankYou'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/member-info" element={<MemberInfo />} />
      <Route path="/slp-info" element={<SlpInfo />} />
      <Route path="/member-registration" element={<MemberRegistration />} />
      <Route path="/spouse-registration" element={<SpouseRegistration />} />
      <Route path="/welcome" element={<WelcomeScreen />} />
      <Route path="/member-preferences" element={<MemberPreferences />} />
      <Route path="/slp-preferences" element={<SlpPreferences />} />
      <Route path="/payment-gateway" element={<PaymentGateway />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/refund-and-transfer" element={<RefundAndTransfer />} />
      <Route path="/payment-successful" element={<PaymentSuccessful />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  )
}

export default App
