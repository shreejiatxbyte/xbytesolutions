import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { links } from "./data";
import "./NavigationBar.css";
import brandLogo from "../../../assets/images/brandLogo/logo.png"; 

function NavigationBar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={brandLogo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
            <button className="btn btn-danger">
              Save changes
            </button>{" "}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
