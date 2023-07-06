import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav"
import styles from "./Intro.module.css"

function Intro() {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <section
          className='wow fadeInUp'
          data-wow-duration='1.2s'>
          <div className={styles.slogan}>
            <div>Bookkeep</div>
            <div>雲端記帳管理工具</div>
            <div>記帳、分析、管理一次解決，個人財物記帳的好幫手</div>
            <Link to="/bookkeep/record">立即體驗</Link>
          </div>
          <div className={`${styles.sample}`}>
            <img
              src={require('../img/sample.png')}
              alt="sample" />
          </div>
        </section>
        <section className={styles.steps}>
          <div className={`${styles.step} wow fadeInUp`} data-wow-duration='1.2s'>
            <div className={styles.stepInstruction}>
              <div>1st step</div>
              <div>選擇需要的費用費用類型，或新增需要的費用類型</div>
            </div>
            <img src={require('../img/step1.png')} alt="1st-step" />
          </div>
          <div className={`${styles.step} wow fadeInUp`} data-wow-duration='1.2s'>
            <img src={require('../img/step2.png')} alt="2nd-step" />
            <div className={styles.stepInstruction}>
              <div>2nd step</div>
              <div>新增第一筆支出紀錄</div>
            </div>

          </div>
          <div className={`${styles.step} wow fadeInUp`} data-wow-duration='1.2s'>
            <div className={styles.stepInstruction}>
              <div>3rd step</div>
              <div>查看支出分佈及變化</div>
            </div>
            <img src={require('../img/step3.png')} alt="3rd-step" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Intro;