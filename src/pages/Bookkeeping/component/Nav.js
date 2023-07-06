import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Nav.module.css"

function Nav() {
  return (
    <div className={styles.nav}>
      <Link to='/bookkeep'>
        <img src={require("../img/logo.png")} alt="Bookkeep_logo" />
      </Link>
      <div className={styles.navLink}>
        <Link to='/bookkeep/record'>日常紀錄</Link>
        <Link to='/bookkeep/present'>統計圖表</Link>
      </div>
    </div>
  );
}

export default Nav;