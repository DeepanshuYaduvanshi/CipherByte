import React from 'react'
import vg from "../assets/2.webp" // vg for vector graphics
// importing some icons from react icons 
import {AiFillGoogleCircle, AiFillAmazonCircle ,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className="home" id='home'> 
        <main>
            <h1>CipherByte</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
      <img src = {vg} alt="Graphics" />  
      <div>
        <p>
          We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children. 
        </p>
      </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>
        As a leading tech company, we pride ourselves on being your sole and comprehensive solution to the everyday tech problems you encounter. Our primary objective is to enhance the problem-solving skills of children, empowering them to overcome technological challenges with confidence. Through our innovative products and services, we strive to create a nurturing environment that fosters creativity and critical thinking. With a team of dedicated experts, we provide cutting-edge solutions tailored to the specific needs of young minds. By instilling a passion for problem-solving at an early age, we pave the way for a future generation of tech-savvy individuals who can confidently navigate the digital landscape.</p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          {/* div act as a wraper and we add style here javascript */}
          <div style={{animationDelay : "0.3s"}}>  
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{animationDelay : "0.5s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{animationDelay : "0.7s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{animationDelay : "1s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home