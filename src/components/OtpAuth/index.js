import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = ({email}) => {

  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(generatedOtp);

    const templateParams = {
      to_email: email,    // Replace with recipient email
      subject: 'RIE 2025 Event Ticket',         // Replace with your subject
      code: generatedOtp, // Replace with your message
    };

    emailjs.send(
      'default_service',
      'template_81ng8dr',
      templateParams,
      'hsxWBIOu96PDlE41t'
    )
    .then((result) => {
      console.log(result.text);
      //alert('Email sent successfully!');
      console.log('OTP sent successfully!')
      //navigate('/otp')
    }, (error) => {
      console.error(error.text);
      alert('Failed to send email.');
    });
  };





};

export default EmailForm;
