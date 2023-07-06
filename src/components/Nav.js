import React from 'react';

import styles from './Nav.module.css'

function Nav() {
  return (
    <div className={styles.Nav}>
      <div>Ansonyzhang.website</div>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
    </div>
  );
}

export default Nav;