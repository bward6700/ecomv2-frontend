import React from 'react'
import AboutUs from '../components/AboutUs'
import Announcement from '../components/Announcement'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <AboutUs/>
        <Products/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home