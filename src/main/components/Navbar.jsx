import React from 'react'

function Navbar() {

  return (
    <>
        <nav class="navbar">
            <div class="navbar-container container">
                <input type="checkbox" name="" id=""></input>
                <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
                <ul class="menu-items">
                    <li><a href="#about">About</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Sign Up</a></li>
                </ul>
                <h1 class="logo"><a href="/">OC</a></h1>
            </div>
        </nav>
    </>
  )
}

export default Navbar
