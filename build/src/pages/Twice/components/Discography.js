import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import styles from './Discography.module.css'
import data from '../data/discography.json'
import { useSearchParams, Link } from 'react-router-dom';

function Discography() {
  const [searchParams] = useSearchParams({pageIndex: 1})
  document.title = "TWICE: Discography"
  return (
    <>
      <Header type='black'></Header>
      <Nav></Nav>
      <div key={searchParams.get('pageIndex')} className={`${styles.dicsography} wow fadeInUp`} data-wow-duration='1s'>
        <div className={styles.dgpTitle}>DISCOGRAPHY</div>
        <div className={styles.albumList}>
          {data.toReversed().slice((searchParams.get('pageIndex')-1)*6,(searchParams.get('pageIndex')-1)*6+6).map(i => 
            <div key={i.id} className={styles.album}>
              <img src={require("../img/"+i.imgUrl.split('/').slice(-2).join('/'))} alt={i.title} />
              <div className={styles.subtitle}>
                <span>{i.title}</span>
                <span>{i.release_date}</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.pageControl}>
          {searchParams.get('pageIndex')*1 === 1 ?
          <button>Previous</button> :
          <Link to={`/twice/discography?pageIndex=${searchParams.get('pageIndex')*1-1}`}>
            <button>Previous</button>
          </Link>
          }
          <div>
            {searchParams.get('pageIndex')}/4
          </div>
          {searchParams.get('pageIndex')*1 === Math.ceil(data.length/6) ?
          <button>Next</button> :
          <Link to={`/twice/discography?pageIndex=${searchParams.get('pageIndex')*1+1}`}>
            <button>Next</button>
          </Link>
          }
        </div>
      </div>
      <Footer type='black-vertical'></Footer>
    </>
  );
}

export default Discography;