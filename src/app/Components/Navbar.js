'use client'
import Link from 'next/link';
import "./Navbar.css";
import React, { useState} from "react";
const Navbar = () =>{
    const [menuOpen, setMenOpen] = useState(false);

    const toggleMenu = () =>{
      setMenOpen(!menuOpen)
    }

    return(
      <nav>
        <button className='burger' onClick={toggleMenu}>&#9776;</button>
        <menu className={menuOpen ? "active" : ""}>
         <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
         <li><Link href="/students" onClick={toggleMenu}>Students</Link></li>
         <li><Link href="/staff" onClick={toggleMenu}>Staff</Link></li>
        </menu>
      </nav>
    )
}
export default Navbar;