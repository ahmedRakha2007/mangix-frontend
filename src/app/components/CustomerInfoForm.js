"use client"
import React from 'react'

const CustomerInfoForm = ({error, customerInfo, setCustomerInfo}) => {
 
    // FUNCTION TO CHANGE THE CUSTOMER INFO STATE
      const handleInputChange = (e) => {
          const { name, value } = e.target;
          setCustomerInfo(prev => ({
            ...prev,
            [name]: value,
          }));
        };
  return (
    <div className="bg-quinary p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold text-quaternary mb-4">Your Details</h2>
                  {error && <p className="text-red-600 mb-3">{error}</p>}
    
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* NAME INPUT */}
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      className="px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-tertiary"
                    />
                    {/* PHONE INPUT */}
                    <input 
                      type="text" 
                      name="phone"
                      placeholder="Phone Number" 
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      className="px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-tertiary"
                    />
                    {/* LOCATION INPUT */}
                    <input 
                      type="text" 
                      name="location"
                      placeholder="Your Location" 
                      value={customerInfo.location}
                      onChange={handleInputChange}
                      className="px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-tertiary"
                    />
                  </div>
                </div>
  )
}

export default React.memo(CustomerInfoForm)