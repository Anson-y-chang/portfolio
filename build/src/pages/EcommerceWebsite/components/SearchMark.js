import React, {useEffect } from 'react';
import { useSearchContext } from '../context/SearchContext';
import styles from'./SearchMark.module.css'

function SearchMark(props) {
  const { localSearchParams, setLocalSearchParams } = useSearchContext()
  // 打字時彈出搜尋畫面
  useEffect(() => {
    if  (document.querySelector('.search-mark.active')) {
    if (localSearchParams !== '') {
      const searchBlock = document.querySelector('.search-block')
      searchBlock.classList.add('active')
    } else if (localSearchParams === '') {
      const searchBlock = document.querySelector('.search-block')
      searchBlock.classList.remove('active')
    }
  }
})
  const closeSearch = () => {
    const searchMark = document.querySelector('.search-mark')
    const searchBlock = document.querySelector('.search-block')
    searchMark.classList.remove('active')
    searchBlock.classList.remove('active')
  } 

  return (
    <div className={`search-mark ${styles.searchMark}`}>
      <button onClick={() => closeSearch()}>
        <div></div>
        <div></div>
      </button>
      <input type="text" value={localSearchParams} onChange={(e) => {setLocalSearchParams(e.target.value)}} placeholder='Search Something...'/>
    </div>
  );
}

export default SearchMark;