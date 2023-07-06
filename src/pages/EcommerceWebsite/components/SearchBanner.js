import React from 'react';
import products from '../data/products.json';
import styles from './SearchBanner.module.css'
import { useSearchParams } from 'react-router-dom';

function SearchBanner() {
  const [searchParams] = useSearchParams()
  
  return (
    <div className={styles.searchBanner}>
      {searchParams.get('q') ? 
      <span>Search Results - {products.filter(i => i.name.toLocaleLowerCase().indexOf(searchParams.get('q').toLocaleLowerCase()) !== -1).length} items</span> :
      <span>Search Results - all items</span>
      }
    </div>
  );
}

export default SearchBanner;