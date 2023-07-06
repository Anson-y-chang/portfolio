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
          <h3>电商平台</h3>
          <p>线上购物网页，为使用者提供各种类型的产品，并可根据价格、特徵等条件筛选商品，或利用搜寻功能查找，提供使用者良好的用户体验，加速品牌业绩增长。</p>
          <Link to="ecommerce" target='_blank' rel="noopener noreferrer">
            進去看看
          </Link>
        </div>
      </div>
      <div className={`${styles.projectCard} wow fadeInUp`} data-wow-duration='1.5s'>
        <div className={styles.projectText}>
          <h3>粉丝专页</h3>
          <p>艺人作品展示页面，使用者了解可以近期艺人活动、艺人简介、历史专辑作品、查看艺之人沙龙照、以及过往发布之音乐录影带等，提升粉丝黏着度。</p>
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
          <h3>记账平台</h3>
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