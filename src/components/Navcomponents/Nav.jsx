import { useState } from "react";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { GiHook } from "react-icons/gi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineDown } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ImGooglePlus } from "react-icons/im";
import "./Nav.css";

function Nav({ watchs, shoes, glasses }) {
  console.log(glasses, shoes, watchs);
  const [isActive, setIsActive] = useState(false);
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
        {watchs.map((items, index) => {
          const { Categories, rolex, admp, richard, mont, harry } = items;
          return (
            <div className="dropdown" key={index}>
              <div
                className="dropdown--btn"
                onClick={() => setIsActive(!isActive)}
              >
                {Categories}
                <AiOutlineDown />
              </div>
              {isActive && (
                <div className="dropdown-content ">
                  <button className="dropdown--item">{rolex}</button>
                  <button className="dropdown--item">{admp}</button>
                  <button className="dropdown--item">{richard}</button>
                  <button className="dropdown--item">{mont}</button>
                  <button className="dropdown--item">{harry}</button>
                </div>
              )}
            </div>
          );
        })}

        {shoes.map((items, index) => {
          const { Categories, classic, sneakers, booths } = items;
          return (
            <div className="dropdown" key={index}>
              <div
                className="dropdown--btn"
                onClick={() => setIsActive(!isActive)}
              >
                {Categories}
                <AiOutlineDown />
              </div>
              {isActive && (
                <div className="dropdown-content ">
                  <button className="dropdown--item">{classic}</button>
                  <button className="dropdown--item">{sneakers}</button>
                  <button className="dropdown--item">{booths}</button>
                </div>
              )}
            </div>
          );
        })}
      </article>
    </nav>
  );
}

export default Nav;
