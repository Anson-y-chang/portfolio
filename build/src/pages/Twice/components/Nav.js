import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './Nav.module.css'


function Nav() {
  const closeNav = () => {
    document.querySelector('.nav').classList.remove('nav-on')
  }

  return (
    <div className={`${styles.nav} nav`}>
      <Header type='nav'></Header>
      <ul className={styles.gnbList}>
        <li>
          <Link onClick={() =>closeNav()} to='/twice/profile'>PROFILE</Link>
        </li>
        <li>
          <Link onClick={() =>closeNav()} to='/twice/discography'>DISCOGRAPHY</Link>
        </li>
        <li>
          <Link onClick={() =>closeNav()} to='/twice/gallery'>GALLERY</Link>
        </li>
        <li>
          <Link onClick={() =>closeNav()} to='/twice/video'>VIDEO</Link>
        </li>
      </ul>
      <Footer type='black'></Footer>
    </div>
  );
}

export default Nav;