import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import styles from './Gallery.module.css'
import photos from '../data/gallery.json'

function Gallery() {
  document.title = "TWICE: Gallery"

  return (
    <>
      <Header type='black'></Header>
      <Nav></Nav>
      <div className={`${styles.container} wow fadeInUp`} data-wow-duration='1s'>
        <div className={styles.title}>GALLERY</div>
        <div className={styles.galleryList}>
          {photos.map(i => 
            {if (i.ratio === 2) {
              return (
                <a data-fancybox="gallery" id={i.id} key={i.id} className={styles.gridSpan2} href={require("../img/gallery/"+i.imgUrl.split('/').slice(-2).join('/'))}>
                  <img src={require("../img/gallery/"+i.imgUrl.split('/').slice(-2).join('/'))} alt="artist_photo"/>
                </a>
              )
            } else {
              return (
                <a data-fancybox="gallery" id={i.id} key={i.id} href={require("../img/gallery/"+i.imgUrl.split('/').slice(-2).join('/'))}>
                  <img  src={require("../img/gallery/"+i.imgUrl.split('/').slice(-2).join('/'))} alt="artist_photo"/>
                </a>
              )
            }}
          )}
        </div>
      </div>


      <Footer type='black-vertical'></Footer>
    </>
  );
}

export default Gallery;