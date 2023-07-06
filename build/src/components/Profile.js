import React from 'react';
import * as img from '../img/index'
import styles from './Profile.module.css'

function Profile() {
  document.title = "Profile"
  return (
    <div id="about" className={styles.intro}>
      <section>
        <div className={`${styles.introText} wow fadeInDown`} data-wow-duration="1.5s">
          <h1>你好！<span>👋</span></h1>
          <h1>我是张钰晟，也可以叫我 Anson~
          </h1>
          <span>前端资讯工程师</span>
          <p>毕业于台湾中正大学财务金融学系，第一份工作于普华永道上海向客戶提供财务审计服务，于大学便开始修习及自学程式设计，熟悉HTML/CSS(scss)/JavaScript，理解React框架及工作原理，并掌握Hooks，Router，状态管理工具redux(redux-toolkit)等相关技术，目前正在上海📍寻找一份前端工程师的工作。
          </p>
          <div className={styles.socialMedia}>
            <a href="https://www.linkedin.cn/incareer/in/yucheng-zhang-22a416120/" target='_blank' rel="noreferrer">
              <img src={img.linkedin} alt="linkedin-logo" />
            </a>
            <a href="https://github.com/Anson-y-chang" target='_blank' rel="noreferrer">
              <img src={img.github} alt="github-logo" />
            </a>
            <a href="https://boiling-song-6da.notion.site/Coding-c804658730d04773984a05b3dccc27b8" target='_blank' rel="noreferrer">
              <img src={img.notion} alt="notion-logo" />
            </a>
            <a href="https://www.instagram.com/anson_1998syat/" target='_blank' rel="noreferrer">
              <img src={img.instagram} alt="instagram-logo" />
            </a>
          </div>
        </div>
        <div className='wow fadeInRight' data-wow-duration="1.5s">
        <div className={`${styles.myPic} `}></div>
        </div>
      </section>
      <section className={`${styles.stack} wow fadeInUp`} data-wow-duration="1.5s">
        <div>Teck Stack</div>
        <ul>
          <li>
            <img src={require('../img/html.png')} alt="html" />
          </li>
          <li>
            <img src={require('../img/css.png')} alt="css" />
          </li>
          <li>
            <img src={require('../img/javascript.png')} alt="javascript" />
          </li>
          <li>
            <img src={require('../img/react.png')} alt="react" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Profile;