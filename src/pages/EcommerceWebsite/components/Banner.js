import React from 'react';
import { useLocation } from 'react-router-dom'
import styles from './Banner.module.css'

function Banner() {
  const location = useLocation()
  const header = (location) => {
    switch (location.pathname.split('/')[3]) {
      case 'new-arrivals':
        return 'New Arrivals'
      case 'home-bath':
        return 'Home + Bath' 
      case 'kitchen-dinning':
        return 'Kitchen + Dinning' 
      case 'office-craft':
        return 'Office + Craft'
      case 'personal-goods':
        return 'Personal Goods'
      default:
        switch (location.pathname.split('/')[2]) {
          case 'search':
            return 'Search Results'
          default:
            return 'Product Collections'
        }
    }
  }
  const imgURLTest = location.pathname.split('/')[3]

  return (
    <div className={styles.banner}>
      <div className={styles.bannerLocation}>{header(location)}</div>
      <div>
        {imgURLTest ? <img className={styles.bannerImg} src={require(`../img/cover/${location.pathname.split('/')[3]}.jpg`)} alt="" /> : ''}
      </div>
      
    </div>
  );
}

export default Banner;