import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header(props) {
  const toggleMenu = () => {
    const nav = document.querySelector('.nav')
    if (!document.querySelector('.nav-on')) {
      nav.classList.add('nav-on')
    } else {
      nav.classList.remove('nav-on')
    }
  }

  switch (props.type) {
    case 'nav':
      return (
        <div className={`${styles.navHeader} ${styles.header}`}>
          <div className={styles.mainLogo}>
            <Link to='/twice'>
              <img src={require('../img/logo-bk.png')} alt="logo" />
            </Link>
          </div>
          <button onClick={() => toggleMenu()} className={`menu-toggle ${styles.menuToggleClose}`}>
            <img src={require('../img/btn_siteMenu_close.png')} alt="logo" />
          </button>
        </div>
      )
    case 'black':
      return (
        <div className={styles.header}>
          <div className={styles.mainLogo}>
            <Link to='/twice'>
              <img src={require('../img/logo-bk.png')} alt="logo" />
            </Link>
          </div>
          <button onClick={() => toggleMenu()} className={`menu-toggle ${styles.menuToggle}`}>
            <img src={require('../img/menu_b.png')} alt="logo" />
          </button>
        </div>
      )
    default:
      return (
        <div className={` ${styles.header} ${styles.homeHeader}`}>
          <div className={styles.mainLogo}>
            <Link to='/twice'>
              <img src={require('../img/logo-wh.png')} alt="logo" />
            </Link>
          </div>
          <button onClick={() => toggleMenu()} className={`menu-toggle ${styles.menuToggle}`}>
            <img src={require('../img/menu.png')} alt="logo" />
          </button>
        </div>
      );
  }
}

export default Header;