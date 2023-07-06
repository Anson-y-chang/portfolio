import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RightCont.module.css'

function RightCont() {
  return (
    <>
      <div className={styles.rightCont}>
        <div className={`${styles.mainAlbumName} wow fadeInRight`} data-wow-duration='1s' data-wow-delay='0.1s'>
          <Link to='/twice/video'>READY TO BE</Link>
        </div>
        <div className={`${styles.mainAlbumSong} wow fadeInRight`} data-wow-duration='1s' data-wow-delay='0.2s'>
          <Link to='/twice/video'>SET ME FREE</Link>
        </div>
        <div className={`${styles.mainLine} wow fadeInRight`} data-wow-duration='1s' data-wow-delay='0.2s'></div>
        <div>
          <div className={`${styles.maintt} wow fadeInRight`} data-wow-duration='1s' data-wow-delay='0.4s'>NOTICE</div>
          <div className={`${styles.mainstt} wow fadeInRight`} data-wow-duration='1s' data-wow-delay='0.5s'>
            Beyond LIVE - TWICE 5TH WORLD TOUR ‘READY TO BE’ in JAPAN  티켓 오픈!
          </div>
        </div>
      </div>
    </>
  );
}

export default RightCont;