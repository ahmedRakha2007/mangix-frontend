import { LucideShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useOrder } from '../contexts/OrderContext'
import { usePathname} from 'next/navigation'
import { useEffect } from 'react'

const ShoppingBag = () => {
    const pathname = usePathname();
     const {order, setOrder} = useOrder()
     
     const totalOrder = order.reduce((total, item) => total + item.quantity, 0)
    useEffect(() => {
        const storedOrder = JSON.parse(localStorage.getItem("order"))
        if(storedOrder){
        setOrder(storedOrder)
        }
    }, [])
        useEffect(() =>{
        localStorage.setItem("order", JSON.stringify(order))
        },[order])
  return (
      <div className="relative hidden sm:block cursor-pointer group">
   
  <div>
    <Link href="/cart">
      <LucideShoppingBag size={30} className={`${pathname === "/cart" ? "text-quaternary" : "text-secondary"} hover:text-tertiary`} />
    </Link>
    <span className='absolute -top-2 -right-2 bg-tertiary text-primary text-xs w-5 h-5 flex items-center justify-center rounded-full'>
      {totalOrder}
    </span>
  </div>

  {/* SHOPPING BAG HOVER*/}
  <div className={`absolute right-0 mt-2 w-72 bg-quinary border border-primary rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out
    ${pathname === "/cart" ? "hidden" : "hidden group-hover:block"}`}>
    
    <div className='p-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-quaternary scrollbar-track-quinary'>
      {order.length === 0 ? (
        <p className='text-gray-500 text-sm'>Cart is empty.</p>
      ) : (
        order.map((item, index) => (
        <div key={index} className='flex items-center justify-between py-2 border-b last:border-b-0'>
          <div className='flex items-center gap-3'>
            {/* Product Image */}
            <Link href={`/shop/${item.type}s/${item.id}`} className="w-12 h-16 relative flex-shrink-0">
              <Image src={item.photo} alt={item.title} width={30} height={30} className="w-full h-full object-cover rounded" />
            </Link>
            {/* Product Info */}
            <div className='flex flex-col'>
              <p className='text-sm text-quaternary font-medium truncate'>{item.title}</p>
              <p className='text-sm text-tertiary font-semibold'>${item.price}</p>
            </div>
          </div>
            {/* product quantity */}
            <div className='bg-quaternary px-2 py-1 rounded'>
            <h1 className='font-bold text-primary'>{item.quantity}</h1>
            </div>
        </div>
        ))
      )}
    </div>

    <div className='p-2 border-t'>
      <Link href="/cart" className='text-quaternary text-sm hover:underline'>Go to Cart</Link>
    </div>
  </div>
</div>
  )
}

export default ShoppingBag