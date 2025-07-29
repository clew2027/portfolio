import { useState, useEffect } from "react";

import { navLinks } from "../constants";
import { Link } from "react-router-dom";


const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
return (
  <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
    <div className="inner">
      {/* Logo links to top of homepage */}
      <Link to="/" state={{ scrollTo: "hero" }} className="logo">
        Charlotte Lew
      </Link>

      {/* Navigation links */}
      <nav className="desktop">
        <ul>
          {navLinks.map(({ link, name }) => (
            <li key={name} className="group">
              <Link to="/" state={{ scrollTo: link.replace("#", "") }}>
                <span>{name}</span>
                <span className="underline" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Button */}
      <Link to="/" state={{ scrollTo: "contact" }} className="contact-btn group">
        <div className="inner">
          <span>Contact me</span>
        </div>
      </Link>
    </div>
  </header>
);
}

export default NavBar;
