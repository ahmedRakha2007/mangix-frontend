import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const MobileDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

 
  return (
     <div className='sm:hidden block relative'>
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className='text-secondary hover:text-tertiary cursor-pointer'
          aria-label="Mobile menu"
        >
          <Menu size={30} />
        </button>

        {isDropdownOpen && (
          <div className='
            absolute top-full right-0 mt-2
            bg-white border border-gray-300 rounded-md shadow-lg
            py-2 w-40 z-50
          '>
            <Link
              href="/" 
              className='block px-4 py-2 hover:bg-gray-100 text-secondary hover:text-tertiary'
              onClick={() => setIsDropdownOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className='block px-4 py-2 hover:bg-gray-100 text-secondary hover:text-tertiary'
              onClick={() => setIsDropdownOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/contact" 
              className='block px-4 py-2 hover:bg-gray-100 text-secondary hover:text-tertiary'
              onClick={() => setIsDropdownOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              href="/cart" 
              className='block px-4 py-2 hover:bg-gray-100 text-secondary hover:text-tertiary'
              onClick={() => setIsDropdownOpen(false)}
            >
              My Cart
            </Link>
          </div>
        )}
      </div>
  )
}

export default MobileDropdown