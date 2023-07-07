import React from 'react';
import ReactLogo from '../Images/logo.svg';
import  './Style.css';


function Navbar(){
    return(
        <>
        <nav className='Navbar' >
            <header className='Navhead'>
                <img src = {ReactLogo} alt= "ReactLogo" width = "60px" />
                <h3>AbdulDev</h3>
            </header>
            <ul>
                <li> <a href='home'> Home</a></li>
                <li><a href='home'>Services</a></li>
                <li><a href='home'>Portfolio</a></li>
                <li><a href='home'>About</a></li>
                <li><a href='home'>Contact</a></li>
            </ul>
        </nav>
        </>
    )
}


export default Navbar;