import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Project.module.css"

function Project() {

  return (
    <div id="projects" className={styles.project}>
      <div>Project</div>
      <div className={`${styles.projectCard} wow fadeInUp`} data-wow-duration='1.5s'>
        <div className={styles.projectImg}>
          <Link to="ecommerce" target='_blank' rel="noopener noreferrer">
            <img src={require('../img/project1.png')} alt="proejct_1" />
          </Link>
        </div>
        <div className={styles.projectText}>
          <h3>電商網站</h3>
          <p>線上購物網頁，為使用者提供各種類型的產品，並可根據價格、特徵等條件篩選商品，或利用搜尋功能查找，提供使用者良好的用戶體驗，加速品牌業績增長。</p>
          <Link to="ecommerce" target='_blank' rel="noopener noreferrer">
            進去看看
          </Link>
        </div>
      </div>
      <div className={`${styles.projectCard} wow fadeInUp`} data-wow-duration='1.5s'>
        <div className={styles.projectText}>
          <h3>粉絲專頁</h3>
          <p>藝人作品展示頁面，使用者了解可以近期藝人活動、藝人簡介、歷史專輯作品、查看藝之人沙龍照、以及過往發布之音樂錄影帶等，提升粉絲黏著度。</p>
          <Link to="twice" target='_blank' rel="noopener noreferrer">
            進去看看
          </Link>
        </div>
        <div className={styles.projectImg}>
          <Link to="twice" target='_blank' rel="noopener noreferrer">
            <img src={require('../img/project2.png')} alt="proejct_2" />
          </Link>
        </div>
      </div>
      <div className={`${styles.projectCard} wow fadeInUp`} data-wow-duration='1.5s'>
        <div className={styles.projectImg}>
          <Link to="bookkeep" target='_blank' rel="noopener noreferrer">
            <img src={require('../img/project3.png')} alt="proejct_3" />
          </Link>
        </div>
        <div className={styles.projectText}>
          <h3>記賬網站</h3>
          <p>提供雲端記帳服務，使用者可根據指引添加費用支出，並自動生成費用分部圖及支出趨勢圖，使用者可根據圖表了解近期帳務情況，並據其作出未來消費決策。</p>
          <Link to="bookkeep" target='_blank' rel="noopener noreferrer">
            進去看看
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;