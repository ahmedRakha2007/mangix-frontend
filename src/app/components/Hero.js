"use client"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'


const Hero = () => {

  return (
    <div className='flex md:justify-between items-center px-5 lg:px-20 h-[400px]'>
         <div className=' flex flex-col justify-center items-start gap-4 text-quaternary'
    >
        <div className='xl:text-8xl md:text-[80px] sm:text-[75px] text-[60px]' style={{lineHeight: 1}}>
            <h2>Explore</h2>
            <h2>Manga & Comics</h2>
        </div>
        <div className='xl:text-2xl md:text-base sm:text-xl text-lg text-secondary'>
           <p>Discover thrilling stories full of action, emotion, and stunning art.</p>
            <p>Find your next favorite series today.</p>
        </div>
       <Link href="/shop" className="bg-tertiary text-primary rounded px-4 py-2 flex items-center gap-2">
            Explore Now
            <ArrowRight />
        </Link>

    </div>
   
    </div>
  )
}
export default Hero
