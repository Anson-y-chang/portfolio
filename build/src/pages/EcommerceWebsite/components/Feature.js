import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom'
import styles from './Feature.module.css'

function Feature() {
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
            return 'Search'
          default:
            return 'Collections'
        }
    }
  }

  const [ ,setSearchParams] = useSearchParams()

  return (
    <div className={styles.feature}>
      <div className={styles.location}>
        <span>Home /&nbsp; {header(location)} /&nbsp; </span>
        <span>Page 1 of 1</span>
      </div>
      <div className={styles.sort}>
        <label>Sort by:</label>
        <div className={styles.sortSelect}>
          <select name="feature" onChange={(e) => {setSearchParams({sort_by: e.target.options[e.target.selectedIndex].value})}}>
            <option value="default">Featured</option>
            <option value="price-ascending">Price: Low to High</option>
            <option value="price-descending">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Feature;