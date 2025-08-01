import React from "react";
import * as img from "../img/index";
import styles from "./Profile.module.css";

function Profile() {
  document.title = "Profile";
  return (
    <div id="about" className={styles.intro}>
      <section>
        <div
          className={`${styles.introText} wow fadeInDown`}
          data-wow-duration="1.5s"
        >
          <h1>
            你好！<span>👋</span>
          </h1>
          <h1>我是張鈺晟，也可以叫我 Anson~</h1>
          <span>前端資訊工程師</span>
          <p>
            畢業於中正大學財務金融學系，目前就讀於陽明交通大學資管所，自大學便開始修習及自學程式設計，熟悉HTML/CSS/JavaScript，熟悉React工作原理與相關功能Hooks、Router、redux等，第一份工作作為前端工程師協助上市櫃公司開發內部管理軟體，主要使用laravel、vue。
          </p>
          <div className={styles.socialMedia}>
            <a
              href="https://www.linkedin.com/in/yucheng-zhang-22a416120/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img.linkedin} alt="linkedin-logo" />
            </a>
            <a
              href="https://github.com/Anson-y-chang"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img.github} alt="github-logo" />
            </a>
          </div>
        </div>
        <div className="wow fadeInRight" data-wow-duration="1.5s">
          <div className={`${styles.myPic} `}></div>
        </div>
      </section>
      <section
        className={`${styles.stack} wow fadeInUp`}
        data-wow-duration="1.5s"
      >
        <div>Teck Stack</div>
        <ul>
          <li>
            <span>html</span>
          </li>
          <li>
            <span>css</span>
          </li>
          <li>
            <span>js</span>
          </li>
          <li>
            <span>php</span>
          </li>
          <li>
            <span>sql</span>
          </li>
          <li>
            <span>react</span>
          </li>
          <li>
            <span>vue</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Profile;
