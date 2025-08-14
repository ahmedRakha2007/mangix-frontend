"use client"
import React from 'react'
import Link from 'next/link'
import Search from './Search'
import ShoppingBag from './ShoppingBag'
import MobileDropdown from './MobileDropdown'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  return (
  <div className='flex items-center justify-between py-10 px-5 lg:px-20'>
    {/* LOGO */}
      <Link href="/" className='md:text-3xl sm:text-[30px] text-[25px] text-tertiary font-bold'>Mangix</Link>    
      {/* NAV LINKS */}
      <div className='sm:flex md:gap-10 sm:gap-5 hidden'>
          <Link href="/" className={`${pathname === "/" ? "text-quaternary" : "text-secondary"} text-[17px] md:text-xl font-bold`}>Home</Link>
          <Link href="/shop" className={`${pathname === "/shop" || pathname === "/shop/mangas" || pathname === "/shop/comics"  ? "text-quaternary" : "text-secondary"} text-[17px] md:text-xl font-bold `}>Shop</Link>
          <Link href="/contact" className={`${pathname === "/contact" ? "text-quaternary" : "text-secondary"} text-[17px] md:text-xl font-bold`}>Contact us</Link>
      </div>
      {/* NAV LINKS */}
              
  {/* SEARCH BAR AND SHOPPING BAG */}
    <div className='flex justify-end gap-5'>
      <Search />
      <ShoppingBag />
    </div>
  {/*SEARCH BAR AND SHOPPING BAG*/}

    {/* Mobile Dropdown */}
    <MobileDropdown />
        
  </div>
  )
}

export default React.memo(Header)