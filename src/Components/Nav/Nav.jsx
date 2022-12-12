import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'
import "./nav.css";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">inBrieff</div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
          <div className="hambox"><Hamburger size={20} distance="lg" easing="ease-in" duration={0.8} color="#fafafa"/></div>
            {/* <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div> */}
          </div>
        </div>

        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            // transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links">
            <li className="nav-item">
              <Link
                to=""
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  
                }}
              >
                Product
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to=""
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                }}
              >
                Features
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to=""
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                }}
              >
              Benefits
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to=""
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px"

                }}
              >
                Testimonials
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to=""
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                }}
              >
                About Us
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to=""
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
          
                }}
              >
                Contact Us
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
           
            <li className="nav-item">
            <div className="buttn"
             style={{
              top: navOpen ? "0" : "120px",
              color:"#fafafa"
            }}>
              <Link
                to=""
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  color:"#fafafa"
                }}
              > Login
              </Link>
              <div className="nav-item-wrapper"></div>
              </div>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
