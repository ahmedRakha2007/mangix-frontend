import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CategorySection from './components/Categories'
import Footer from './components/Footer'
import Reviewers from './components/Reviewers'
import HomeSection from './components/HomeSection'



const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <HomeSection  homeSection= "recommended"/>
    <CategorySection />
    <HomeSection  homeSection= "recent"/>
    <Reviewers />
    <Footer />
    </>
  )
}

export default Home