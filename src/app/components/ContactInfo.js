import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactInfo = () => {
  return (
    <div className="bg-secondary rounded-3xl p-8 text-primary shadow-2xl space-y-6">
      <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
      <p className="text-base text-primary">
        Have a question or want to place an order? Reach out to us anytime — we’d love to hear from you!
      </p>

      <div className="space-y-4">
        <div className="flex items-start space-x-4 p-4 rounded-xl bg-secondary/70 hover:bg-secondary/90 transition">
          <Mail className="w-6 h-6 mt-1 text-primary" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-sm text-primary">support@fantasymanga.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 rounded-xl bg-secondary/70 hover:bg-secondary/90 transition">
          <Phone className="w-6 h-6 mt-1 text-primary" />
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-sm text-primary">+1 234 567 8901</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4 rounded-xl bg-secondary/70 hover:bg-secondary/90 transition">
          <MapPin className="w-6 h-6 mt-1 text-primary" />
          <div>
            <p className="font-semibold">Address</p>
            <p className="text-sm text-primary">123 Sakura Lane, Neo Tokyo, Japan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
