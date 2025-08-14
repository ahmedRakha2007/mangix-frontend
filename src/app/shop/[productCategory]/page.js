'use client'
import React, { useEffect, useState } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { useOrder } from '@/app/contexts/OrderContext'
import Link from 'next/link'
import axiosInstance from '@/lib/axiosInstance'
import SkeletonCard from '@/app/components/SkeletonCard'
import Alert from '@/app/components/Alert'

const productsTypes = ['All', 'Fantasy', 'Adventure', 'Action', 'Horror']

const ProductCategory = ({ params }) => {
  const { productCategory } = React.use(params); 
  const { order, setOrder } = useOrder()
  const [products, setProducts] = useState([])
  const [selectedType, setSelectedType] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [alert, setAlert] = useState(false)

  async function fetchProducts(category, page, genre) {
    try {
      const res = await axiosInstance.get(`/${category}?page=${page}&genre=${genre}`);
      const data = res.data.data;
      // set products whether manga or comic
      setProducts(data.mangas || data.comics || []); 
      setLastPage(data.pagination.last_page);
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProducts(productCategory, currentPage, selectedType)
  }, [productCategory, currentPage, selectedType]) //  reload when category changes

  const handlePageChange = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page)
    }
  }

  return (
    <>
      <Header />
    
      <section className="min-h-screen bg-primary py-10 px-5 lg:px-20">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-quaternary capitalize">
            {productCategory} Collection
          </h1>
          <select
            className="bg-quinary text-black py-2 px-2 rounded-lg shadow cursor-pointer"
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value);
              setCurrentPage(1);
            }}
          >
            {productsTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[...Array(16)].map((_,i) => (
                  <div key={i}>
                    <SkeletonCard />
                  </div>))
                }
                </div>
            ) 
            
            : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index}>
              <div className='flex items-center gap-5'>
                <Link href={`/shop/${productCategory}/${product.id}`}>
                  <Image
                    src={product.photo}
                    alt={product.title}
                    width={120}
                    height={120}
                    className="object-cover w-[170px] h-[170px] shadow-2xl cursor-pointer"
                  />
                </Link>
                <div className='flex flex-col justify-between items-start gap-2 w-full'>
                  <h1 className='text-xl font-medium mb-1'>{product.title}</h1>
                  <h1 className='text-sm font-light text-secondary'>By : {product.author}</h1>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1 text-tertiary'><Star size={18} /> {product.rate}</div>
                    <h1 className='text-lg font-semibold'>${product.price}</h1>
                  </div>
                  <button
                    className={`border-2 border-quaternary text-quaternary rounded px-5 py-1 font-medium
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
                        }, 1000);
                      }
                    }}
                  >
                    {product.isActive ? 'Add to Cart' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
            )}
        

      </section>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 cursor-pointer bg-quinary text-black rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 cursor-pointer rounded ${currentPage === page ? 'bg-tertiary text-quinary' : 'bg-quinary text-tertiary'}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === lastPage}
          className="px-4 py-2 cursor-pointer bg-quinary text-black rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      {/*PAGINATION*/}

          {/* Alert */}
        {alert ? <Alert message="the product has been added successfully" /> : ""}
      <Footer />
    </>
  )
}

export default ProductCategory