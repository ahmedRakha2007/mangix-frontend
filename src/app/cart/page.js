"use client";
import React, { useState } from 'react';
import { useOrder } from '../contexts/OrderContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomerInfoForm from '../components/CustomerInfoForm';
import CartItems from '../components/CartItem';
import CartSummary from '../components/CartSummary';

const Cart = () => {
  const { order } = useOrder();

      const [customerInfo, setCustomerInfo] = useState({
      name: '',
      phone: '',
      location: '',
    });
    
  const [error, setError] = useState('');

  const totalItems = order.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <Header />

      <div className="px-5 lg:px-20 py-10 bg-primary min-h-screen">
        <h1 className="text-3xl font-bold text-tertiary mb-8">My Cart</h1>

        {totalItems === 0 ? (
          <div className="bg-quinary p-8 rounded shadow text-center">
            <p className="text-secondary text-lg">🛒 Your cart is empty.</p>
            <p className="text-gray-500 mt-2">Browse our shop and add items to your cart.</p>
          </div>
        ) : (
          <div className="space-y-6">
        
            {/* ORDER MAP */}
              <CartItems />
            {/* Customer Info Form */}
              <CustomerInfoForm error={error} customerInfo={customerInfo} setCustomerInfo={setCustomerInfo}/>
            {/* Cart Summary and Buttons */}
              <CartSummary setError={setError} customerInfo={customerInfo}  totalItems={totalItems}/>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
