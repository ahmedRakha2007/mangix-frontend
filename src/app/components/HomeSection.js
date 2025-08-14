"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import Slider from "react-slick"
import { useOrder } from '../contexts/OrderContext'
import axiosInstance from '@/lib/axiosInstance'
import Link from 'next/link'
import SkeletonCard from './SkeletonCard'
import Alert from './Alert'

   const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            { breakpoint: 1536, settings: { slidesToShow: 4, slidesToScroll: 3 } },
            { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 2 } },
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 0 } },
            { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false, initialSlide: 0 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } }
        ]
    };

const HomeSection = ({homeSection}) => {
    const { order, setOrder } = useOrder()
    const [section, setSection] = useState([])
    const [loading, setloading] = useState(true)
    const [alert, setAlert] = useState(false)
    async function fetchHomeSections() {
        try{
            const res = await axiosInstance.get("/home-sections")
            setSection(res.data.data[homeSection])
            setloading(false)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchHomeSections()
    } ,[])


    return (
        loading ? (
            <div className={`flex flex-col items-start justify-center py-10 px-5 lg:px-20 h-auto mb-5 ${homeSection === "recent"? "bg-quinary py-5" : ""}`}>
                <h1 className='mb-10 xl:text-5xl text-3xl font-semibold'>
                    {homeSection === "recommended" ? "Recommended" : "Recently added"}
                </h1>
                <div className='w-full'>
                    <Slider {...settings}>
                        {/* Render 4 skeleton cards as placeholders */}
                        {[...Array(4)].map((_, i) => (
                            <div key={i}>
                                <SkeletonCard />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
        : (
            <>
            <div className={`flex flex-col items-start justify-center py-10 px-5 lg:px-20 h-auto mb-5 ${homeSection === "recent"? "bg-quinary py-5" : ""}`}> 
                <h1 className='mb-10 xl:text-5xl text-3xl font-medium'>{homeSection === "recommended" ? "Recommended" : "Recently added"}</h1>
                <div className='w-full'>
                    <Slider {...settings}>
                        {section.map((item, index) => (
                            <div key={index}>
                                <div className='flex items-center gap-5'>
                                    <Link href={`/shop/${item.type}s/${item.id}`}>
                                        <Image
                                            src={item.photo} 
                                            alt={item.title}
                                            width={120}
                                            height={120}
                                            className="object-cover w-[170px] h-[170px] shadow-lg" 
                                        />
                                    </Link>
                                    <div className=' flex flex-col justify-between items-start gap-2 w-full'>
                                        <h1 className='text-xl font-bold mb-1'>{item.title}</h1>
                                        <h1 className='text-sm font-light text-secondary '>{item.genre} | By : {item.author}</h1>
                                        <div className='flex items-center gap-2 '>
                                            <div className='flex items-center gap-1 text-tertiary' ><Star size={18} /> {item.rate}</div>
                                            <h1 className='text-lg font-semibold'>${item.price}</h1>
                                        </div>
                                        <button  className={`border-2 border-quaternary text-quaternary rounded px-5 py-1 font-medium
                                                    ${item.isActive ? "hover:bg-quaternary hover:text-primary active:scale-95 transition-all ease-in-out cursor-pointer duration-300 focus:outline-none" : ""}
                                                    `}
                                                    onClick={() => {
                                                        if(item.isActive){
                                                            let found = false
                                                       const updatedOrder = order.map((i) => {
                                                        if(i.title === item.title){
                                                            found = true
                                                            return {...i, quantity: i.quantity + 1}
                                                        }else{ return i}
                                                       })
                                                       if(found){
                                                        setOrder(updatedOrder)
                                                       }else{
                                                        setOrder([...order, {...item, quantity: 1}])
                                                       }
                                                         setAlert(true)
                                                        setTimeout(() => {
                                                        setAlert(false)
                                                        }, 1000)
                                                    }
                                                    }}
                                                    >
                                           {item.isActive ? 'Add to Cart' : 'Unavailable'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Alert */}
            {alert? <Alert message="the product has been added successfully"/> : ""}
        </>
        )
    );
}

export default HomeSection;

