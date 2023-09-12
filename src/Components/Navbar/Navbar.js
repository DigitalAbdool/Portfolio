import React from "react";
import "./Navbar.css"

function Navbar() {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a className="navbar-link" href="/about">About</a></li>
          <li className="navbar-item"><a className="navbar-link" href="/portfolio">Portfolio</a></li>
          <li className="navbar-item"><a className="navbar-link" href="/contact">Contact</a></li>
          <li className="navbar-item">
            <a className="navbar-link" href="/">
              <img src="../Assets/Mypic.JPG" alt="Logo" className="navbar-img"  />
            </a>
            <ul className="navbar-dropdown dropdown_fadeIn none">
            <h4 className="username">Abdulazeez Kabir</h4>
            <h4 className="tittle">Frontend Web Developer</h4>
            <hr className="divider" />
              <li className="socials-dropdown">
                <a href="/"><img src="../Assets/linkedin.svg" alt="LinkedIn" width="20px" /></a>
                <a href="/"><img src="../Assets/GitHub Icon.svg" alt="Github" /></a> 
                <a href="/"><img src="../Assets/Twitter Icon.svg" alt="Twitter"/></a> 
                <a href="/"><img src="../Assets/Facebook Icon.svg" alt="Facebook" /></a> 
              </li>
              <hr className="divider" />
              <div className="btns">
                <button><a href="/" className="button-item ">MY CV</a></button>
                <button><a href="/" className="button-item">Hire Me</a></button>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
  
export default Navbar;
/* function Navbar(){
    return(
        <div>
            <header>
                <div className="nav-wrapper">
                    <nav className="nav-links">
                        <ul>
                            <li>
                                <a href="#about">About Me</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <img src="../Assets/Mypic.JPG" width="40px" alt=""/>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="dropdown-wrapper">
                    
                    <section className="dropdown-socials">
                        <img src="../Assets/linkedin.svg" alt="LinkedIn" width="20px" />
                        <img src="../Assets/GitHub Icon.svg" alt="Github" />
                        <img src="../Assets/Twitter Icon.svg" alt="Twitter"/>
                        <img src="../Assets/Facebook Icon.svg" alt="Facebook" />
                    </section>
                    <hr className="hr-line"/>
                    <div>
                        <button>MY CV</button>
                        <button>Hire Me</button>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Navbar; */