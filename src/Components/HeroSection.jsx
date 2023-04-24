import React from 'react'
import img from "../images/hero.jpg.png"

const HeroSection = () => {
  return (
    <div className="hero-section">
    <div className="text-section" >
      <h1 className="hero-text">Find Your Style.<br/>Refresh Your<br/>Look <hr/></h1>
      <p className="p">We believe in a global industry that conserves and restores <br/> the environment values people over growth and profit</p>
      <a href="#second-sec"><button  className="shop-btn">Go to Shope <i className="bi bi-arrow-right right-icon"></i></button></a>
    </div>
    <div className="image-sec" >
      <img className="style-image" src={img} alt=""/>
    </div>
  </div>
  )
}

export default HeroSection
