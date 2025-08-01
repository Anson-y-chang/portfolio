import React from "react";
import { useEffect } from "react";
import { closeMenu } from "../utilities/closeMenu";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Cart from "./Cart";
import SearchBlock from "./SearchBlock";
import SearchMark from "./SearchMark";
import "./main.css";
import styles from "./Ecommerce.module.css";

function Ecommerce() {
  useEffect(() => closeMenu());
  document.title = "ayako";
  return (
    <>
      <Menu></Menu>
      <SearchBlock></SearchBlock>
      <div className={`page-container home-page ${styles}`}>
        <div>
          <img
            className={styles.homeCover}
            src={require("../img/cover/Home_Page.jpg")}
            alt="home-page-cover"
          />
        </div>
        <div className="margin-lr">
          <Navbar></Navbar>
          <div className="start-button">
            <Link
              className={styles.startButton}
              to="/ecommerce/collections"
            ></Link>
          </div>
        </div>
        <div className="mark"></div>
        <SearchMark></SearchMark>
      </div>
      <Cart></Cart>
    </>
  );
}

export default Ecommerce;
