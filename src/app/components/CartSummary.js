import React from 'react'
import { useOrder } from '../contexts/OrderContext'

const CartSummary = ({setError, customerInfo, totalItems}) => {
    const {order, setOrder} = useOrder()

    const totalPrice = Number(order.reduce((total, item) => total + (Number(item.price) * item.quantity), 0).toFixed(2));

    const clearCart = () => {
    setOrder([]);
 };


 const sendOrderViaWhatsApp = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.location) {
      setError("Please fill in all your details.");
      return;
    }

    setError('');

    const orderDate = new Date().toLocaleString();
    const messageLines = order.map((item, index) => {
      return `${index + 1}. ${item.title} (${item.type}) - $${item.price} x ${item.quantity || 1} = $${(item.price * (item.quantity || 1)).toFixed(2)}`;
    });

    const message =
      `📦 *Order Summary* 📦\n` +
      `Date: ${orderDate}\n\n` +
      messageLines.join('\n') +
      `\n\n💰 *Total*: $${totalPrice}` +
      `\n\n👤 *Customer Details*:\n` +
      `Name: ${customerInfo.name}\n` +
      `Phone: ${customerInfo.phone}\n` +
      `Location: ${customerInfo.location}\n` +
      (customerInfo.notes ? `Notes: ${customerInfo.notes}\n` : '');


     const shopPhoneNumber = "+905527793378";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${shopPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
     <div className="mt-8 bg-quinary p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
              <div className="text-[17px] md:text-lg text-quaternary font-semibold mb-4 sm:mb-0">
                Total Items: <span className="font-bold text-tertiary">{totalItems}</span> | 
                Total Price: <span className="font-bold text-tertiary">${totalPrice}</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={clearCart} 
                  className="bg-red-700 text-primary md:px-4 px-2 py-2 rounded-xl hover:bg-red-800 cursor-pointer"
                >
                  Clear Cart
                </button>

                <button 
                  onClick={sendOrderViaWhatsApp} 
                  className="bg-green-600 text-primary md:px-4 px-2 py-2 rounded-xl hover:bg-green-700 cursor-pointer"
                >
                  Send via WhatsApp
                </button>
              </div>
            </div>
  )
}

export default CartSummary