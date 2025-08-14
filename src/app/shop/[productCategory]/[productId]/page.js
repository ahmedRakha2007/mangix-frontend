"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import axiosInstance from "@/lib/axiosInstance";
import { Star } from "lucide-react";
import { useOrder } from "@/app/contexts/OrderContext";
import RelatedSection from "@/app/components/RelatedSection";
import SkeletonCardId from "@/app/components/SkeletonCardId";
import Alert from "@/app/components/Alert";

const ProductDetails = ({ params }) => {
  const { productCategory, productId } = React.use(params);
  const { order, setOrder } = useOrder();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false)

  async function fetchProductById(category, id) {
    try {
      const res = await axiosInstance.get(`/${category}/${id}`);
      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response?.statusText || "Error fetching product");
    }
  }

  useEffect(() => {
    fetchProductById(productCategory, productId);
  }, [productCategory, productId]);

  return (
    <>
      <Header />
      {loading ? (
        <SkeletonCardId />
      ) : (
        <div className="flex sm:flex-row flex-col items-center sm:gap-5 px-5 lg:px-20 py-10">
          <Image
            src={product.photo}
            alt={product.title}
            width={150}
            height={150}
            className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] shadow-2xl rounded"
          />
          <div className="flex flex-col justify-center pt-8 sm:pt-0 gap-5 lg:gap-8 w-full h-full">
            <h1 className="font-bold xl:text-8xl lg:text-7xl sm:text-5xl text-4xl">{product.title}</h1>
            <h1 className="text-2xl font-light text-secondary">
              {product.genre} | By : {product.author}
            </h1>
            <p className="text-2xl font-medium">{product.description}</p>
            <div className="flex">
              <div className="flex text-xl items-center font-medium gap-1 text-tertiary">
                <Star size={25} /> {product.rate}
              </div>
              <h1 className="ml-2 text-xl font-bold text-quaternary">${product.price}</h1>
            </div>
            <button
              className={`border-2 border-quaternary text-quaternary rounded-2xl px-5 py-2 font-medium w-full text-xl
                ${product.isActive ? "hover:bg-quaternary hover:text-primary active:scale-95 transition-all ease-in-out cursor-pointer duration-300 focus:outline-none" : ""}
              `}
               onClick={() => {
                    if(product.isActive){
                        let found = false
                    const updatedOrder = order.map((i) => {
                    if(i.title === product.title){
                        found = true
                        return {...i, quantity: i.quantity + 1}
                    }else{ return i}
                    })
                    if(found){
                    setOrder(updatedOrder)
                    }else{
                    setOrder([...order, {...product, quantity: 1}])
                    }
                    setAlert(true)
                    setTimeout(() => {
                      setAlert(false)
                    }, 1000)
                  }
                }}
            >
              {product.isActive ? "Add to Cart" : "Unavailable"}
            </button>
          </div>
        </div>
      )}

      {!loading ? (
         <RelatedSection category={productCategory} genre={product.genre}/>
      ) : (
        ""
      )}

      {/* Alert */}
      {alert? <Alert message="the product has been added successfully" /> : ""}
      <Footer />
    </>
  );
};

export default ProductDetails;
