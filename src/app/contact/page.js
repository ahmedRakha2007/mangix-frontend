"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axiosInstance from '@/lib/axiosInstance'
import ContactInfo from '../components/ContactInfo'
import Alert from '../components/Alert'

const Contact = () => {

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [alert, setAlert] = useState(false)

  function handleFormChange(e){
    const {value, name} = e.target
    setContactForm({...contactForm, [name]: value})
  }

  async function sendMessage() {
    try{
      const res = await axiosInstance.post("/contact",contactForm)
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 1500);
      setContactForm({name: "", email: "",  message: ""})
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <Header />
      <section className="bg-primary min-h-screen px-4 py-20 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-quaternary mb-12 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

        {/* Contact Info */}
        <ContactInfo />
          {/* Contact Form */}
          <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="bg-quinary rounded-3xl p-8 shadow-2xl space-y-6"
          >
            <h2 className="text-3xl font-bold text-quaternary mb-4">Send a Message</h2>

            <input
              type="text"
              value={contactForm.name}
              name='name'
              onChange={handleFormChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <input
              type="email"
              name='email'
              value={contactForm.email}
              onChange={handleFormChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <textarea
            value={contactForm.message}
            name='message'
            onChange={handleFormChange}
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <button
              type="submit"
              className="bg-secondary text-primary px-6 py-3 rounded-xl font-bold hover:bg-tertiary transition cursor-pointer"
           >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full max-w-6xl mt-16 rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          className="w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8830940375394!2d139.7432386152587!3d35.65858098019906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbf1f8f25d1%3A0x3fa34b5e769eec24!2sTokyo%20Tower!5e0!3m2!1sen!2sjp!4v1700000000000!5m2!1sen!2sjp"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </section>

      {alert ? <Alert  message="the message sent successfully"/> : ""}
      <Footer />
    </>
  )
}

export default Contact
