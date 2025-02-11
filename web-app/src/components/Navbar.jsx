import React from 'react'
import Logo from "../assets/heaven-logo.png"
import '../style/Navbar.css'

const Navbar = () => {

    const toggleMobileView = () => {
        const hamburger = document.querySelector(".hamburger")
        const navMenu = document.querySelector(".nav-menu")

        hamburger.classList.toggle('active')
        navMenu.classList.toggle('active')
    }

    return (
        <header className='header'>
            <nav className='navbar'>
                <div className="app-logo">
                <a href="#"><img className='applogo-img' src={Logo} alt="" /></a>
                </div>
                <ul className='nav-menu'>
                    <li className='nav-list'><a className='nav-link'>Home</a></li>
                    <li className='nav-list'><a className='nav-link'>Services</a></li>
                    <li className='nav-list'><a className='nav-link'>About</a></li>
                </ul>

                <div className="hamburger" onClick={toggleMobileView}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
