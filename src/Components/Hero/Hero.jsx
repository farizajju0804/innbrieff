import React from 'react'
import background from '../Hero/background.mp4'
import './Hero.css'

function Hero() {
  return (
    <div className='Hero'>
      <div className="overlay"></div>
        <video src={background} id="background-video" loop autoPlay muted ></video>
            {/* <source src={background} type="video/mp4" /> */}
          <div className="hero-text">
          <h1>Get Smarter In 15 Minutes</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Mi elementum </p>
          <button className='butn'>Kickstart your future</button>
        </div>
      
    </div>
  )
}

export default Hero