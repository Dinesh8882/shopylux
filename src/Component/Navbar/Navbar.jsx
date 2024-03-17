import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-scroll';

function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 100 ? setSticky(true):setSticky(false)
    })
  },[]);

  return (
    <nav className={`container_1 ${sticky? 'dark_nav':''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='most_view' smooth={true} offset={-280} duration={500}>Most View</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='gallery' smooth={true} offset={-270} duration={500}>Gallery</Link></li>
            <li><Link to='blogs' smooth={true} offset={-230} duration={500}>Blogs</Link></li>
            <li><Link to='contact' smooth={true} offset={-120} duration={500} className='btn'>Contact us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar