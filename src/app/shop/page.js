
import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'

const cards = [
  {
    title: 'Manga',
    description: 'Dive into captivating Japanese stories filled with action, emotion, and fantasy.',
    image: '/2ed18cee554da4948e1a6ec5761cd64f.jpg',
    href: '/shop/mangas',
  },
  {
    title: 'Comics',
    description: 'Explore legendary heroes and adventures from the West’s best comic books.',
    image: '/2ec0a417dca17238da780daa2cd34312.jpg',
    href: '/shop/comics',
  },
]

const Shop = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen flex flex-col items-center bg-primary pt-10 px-8">
        <h1 className="text-5xl font-bold mb-16 text-quaternary text-center">Explore Our Store</h1>

        <div className="flex md:flex-row flex-col items-center justify-between md:justify-evenly w-full max-w-6xl">
          {cards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              className="group relative rounded-3xl shadow-2xl lg:mt-0 mt-10 overflow-hidden hover:scale-105 transition-transform duration-500 "
            >
              <div className="relative lg:h-[600px] lg:w-[440px] md:h-[550px] md:w-[315px] sm:h-[500px] sm:w-[400px] h-[500px] w-[300px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Fixed background overlay */}
                <div
                  className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"
                />

                <div className="absolute bottom-20 w-full text-center z-10 text-white drop-shadow-md text-4xl font-bold transition-transform duration-500 group-hover:-translate-y-12">
                  {card.title}
                </div>

                <p className="absolute bottom-8 w-full text-center font-light text-sm text-white drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 px-6">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Shop
