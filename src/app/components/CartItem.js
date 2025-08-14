import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useOrder } from '../contexts/OrderContext'
import { Trash2 } from 'lucide-react'

const CartItems = () => {

    const {order, setOrder} = useOrder()

 // Function to increase quantity of item at index
  const increaseQuantity = (index) => {
    const updatedOrder = [...order];
    updatedOrder[index].quantity = (updatedOrder[index].quantity || 1) + 1;
    setOrder(updatedOrder);
  }

// Function to decrease quantity of item at index (minimum 1)
const decreaseQuantity = (index) => {
  const updatedOrder = [...order];
  if ((updatedOrder[index].quantity || 1) > 1) {
    updatedOrder[index].quantity = updatedOrder[index].quantity - 1;
    setOrder(updatedOrder);
  }
}
      // FUNCTION TO REMOVE ITEM FROM THE ORDER
  const removeItem = (indexToRemove) => {
    const updatedOrder = order.filter((_, index) => index !== indexToRemove);
    setOrder(updatedOrder);
  };
  return (
    <>
       {order.map((item, index) => (
    <div key={index} className="flex items-center gap-4 bg-quinary p-4 rounded-lg shadow-sm">
      <div className="relative w-20 h-28 flex-shrink-0">
        <Link href={`/shop/${item.type}s/${item.id}`}>
          <Image
            src={item.photo} 
            alt={item.title}
            width={70}  
            height={70}  
            className="rounded object-cover h-[120px] w-[120px]"
          />
        </Link>
      </div>
      <div className="flex-1">
        <p className="sm:text-2xl text-xl font-bold text-quaternary">{item.title}</p>
        <p className="sm:text-lg text-sm text-secondary">{item.genre} | By : {item.author}</p>
        <p className="mt-1 text-tertiary font-bold sm:text-xl text-lg">${item.price}</p>

        {/* ----QUANTITY CONTROLS----*/}

        {/* BUTTON TO DECREASE THE QUANTITY */}
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={() => decreaseQuantity(index)}
            className="px-2 py-1 bg-primary rounded hover:bg-tertiary transition-all cursor-pointer"
          >
            -
          </button>

          {/* ITEM QUANTITY */}
          <span className="text-lg font-semibold text-quaternary">{item.quantity || 1}</span>

            {/*  BUTTON TO INCREASE THE QUANTITY */}
          <button
            onClick={() => increaseQuantity(index)}
            className="px-2 py-1 bg-primary rounded hover:bg-tertiary transition-all cursor-pointer"
          >
            +
          </button>
        </div>
        {/* ---QUANTITY CONTROLS---*/}

      </div> 
      <Trash2
        onClick={() => removeItem(index)} 
        className="hover:text-red-700 cursor-pointer text-9xl sm:w-[35px] sm:h-[35px] w-[30px] h-[30px]"
      />
    </div>
      ))}
    </>  
  )
}

export default CartItems