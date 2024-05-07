import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css"

function Navbar() {

  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  }

  const closeMenu = () => {
    setNavActive(false)
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setNavActive(closeMenu)
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setNavActive(closeMenu)
    }
  }, []);
    return (
      <nav className={`navbar ${navActive ? "Active" : ""}`}>
        <div>
        <img src="../Assets/Mypic.JPG" alt="Logo" className="navbar-img"  /> <span>AbdulDev</span>
        </div>
        <a className= {`nav_hamburger ${navActive ? "Active" : ""}`} href="/"
        onClick={toggleNav} >
          <span className="nav_hamburger_line"></span>
          <span className="nav_hamburger_line"></span>
          <span className="nav_hamburger_line"></span>
        </a>
        <div className= {`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
              onClick={closeMenu}
              activeClass= "navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
              onClick={closeMenu}
              activeClass= "navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
              onClick={closeMenu}
              activeClass= "navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
              onClick={closeMenu}
              activeClass= "navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="navbar--content"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
export default Navbar;

/*
function Navbar() {

  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  }

  const closeMenu = () => {
    setNavActive(false)
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setNavActive(closeMenu)
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setNavActive(closeMenu)
    }
  }, []);
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a className="navbar-Link" href="/about">About</a></li>
          <li className="navbar-item"><a className="navbar-Link" href="/portfolio">Portfolio</a></li>
          <li className="navbar-item"><a className="navbar-Link" href="/contact">Contact</a></li>
          <li className="navbar-item">
            <a className="navbar-Link" href="/">
              <img src="../Assets/Mypic.JPG" alt="Logo" className="navbar-img"  />
            </a>
            <ul className="navbar-dropdown dropdown_fadeIn none">
            <h4 className="username">Abdulazeez Kabir</h4>
            <h4 className="tittle">Frontend Web Developer</h4>
            <hr className="divider" />
              <li className="socials-dropdown">
                <a href="/"><img src="../Assets/Linkedin.svg" alt="LinkedIn" width="20px" /></a>
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
*/
/* function Navbar(){
    return(
        <div>
            <header>
                <div className="nav-wrapper">
                    <nav className="nav-Links">
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
                        <img src="../Assets/Linkedin.svg" alt="LinkedIn" width="20px" />
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