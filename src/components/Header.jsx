import React from 'react'
// link reload nhi hone deta page but ye use kr rhe to hm id pr ja nhi pa rhe and anchor tag use kr rhe to ja pa rhe id pr but page relaod ho rha so hm isme hashlink use krenge taki page bhi reload na ho and hm id pr ja bhi ske
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"
const Header = () => {
  return (
    <nav>
      <h1>
      CipherByte
      </h1>
      <main>
        <HashLink to = {"/#home"}>Home</HashLink>
        <Link to = {"/contact"}>Contact</Link>
        <HashLink to = {"/#about"}>About</HashLink>    {/* #about isliye kiya kyuki hm ek div bnayenege and usme id denge and scrool hoke vhi aa jayega and scroll behaviour hmne smooth bhi kiya h*/}
        <HashLink to = {"/#brands"}>Brands</HashLink>
        <Link to = {"/services"}>Services</Link>
        
      </main>
    </nav>
  )
}

export default Header