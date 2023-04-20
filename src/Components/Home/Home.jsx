import React from 'react'
import main from './main.jpg'
import './Home.css'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div className='home-cont'>
      <div className='image'>
      <div className='mainheading'>
      <h1 className='header-banner'>Kerala's Leading Web <br></br>Design Company

       </h1>
       <p className='header-para'>
       Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile App Development Services.
       </p>
      </div>
       
      </div>
      <Services/>
     
    </div>
  )
}

export default Home
