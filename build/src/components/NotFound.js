import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css'

function NotFound(props) {
  document.title = 'Error 404'
  return (
    <div className={styles.notFound}>
      <div>OOPS!</div>
      <div>找不到當前網址下的的頁面。</div>
      <div>請再次確認一下您輸入的頁面地址是否正確。</div>
      <Link to='/'>點此返回主頁</Link>
    </div>
  );
}

export default NotFound;