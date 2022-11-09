import React from "react";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { GiHook } from "react-icons/gi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineDown } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ImGooglePlus } from "react-icons/im";
import "./Nav.css";

function Nav() {
  const { isActive, setIsActive } = useState(false);
  return (
    <nav>
      <main className="navbar">
        <form className="form">
          <input type="text" placeholder="search" />
          <div className="search--btn">
            <BiSearchAlt />
          </div>
        </form>
        <div className="logo">
          <h1>
            FLOCKY
            <span>
              <GiHook />
            </span>
            HOOKS
          </h1>
        </div>
        <div className="socials-links">
          <BsInstagram />
          <AiOutlineTwitter />
          <ImGooglePlus />
          <FaFacebookF />
        </div>
      </main>
      <article className="nav-dropdown">
        <div className="dropdown">
          <div
            className="dropdown--btn"
            onClick={(e) => setIsActive(!isActive)}
          >
            Watch
            <AiOutlineDown />
          </div>
          {isActive && (
            <div className="dropdown-content">
              <h3 className="dropdown--item">Rolex</h3>
              <h3 className="dropdown--item">Casio</h3>
              <h3 className="dropdown--item">Richard Mulla</h3>
              <h3 className="dropdown--item">Smart Watchs</h3>
            </div>
          )}
        </div>
      </article>
    </nav>
  );
}

export default Nav;
