import React from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'


import Footer from '../Components/Footer'
import News from '../Components/News'



function Home() {
  return (
    <div>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <News></News>
      <Footer></Footer>
    </div>
  )
}

export default Home
