import React from 'react';
import Header from './Header';
import Nav from './Nav';
import RightCont from './RightCont';
import Footer from  './Footer';
import styles from './main.module.css'

function HomeTwice() {
  document.title = "TWICE"
  return (
    <div id='wrap'>
      <Header></Header>
      <Nav></Nav>
      <div className={`${styles.mainBgImg} wow fadeIn`} data-wow-duration='1s'></div>
      <RightCont></RightCont>
      <Footer></Footer>
    </div>
  );
}

export default HomeTwice;