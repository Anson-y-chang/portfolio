import React from 'react';
import styles from './Footer.module.css'

function Footer(props) {
  switch (props.type) {
    case 'black':
      return (
        <div className={styles.footer}>
          <p className={`${styles.copyRight} ${styles.black}`}>
            Copyright ©
            <span>JYP</span>
            ENTERTAINMENT Co., Ltd. All rights reserved.
          </p>
          <ul className={styles.sns}>
            <li>
              <a href="https://instagram.com/twicetagram" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_instagram_b.png")} alt="INSTAR"/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/JYPETWICE" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_twitter_b.png")} alt="TWITER"/>
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/JYPETWICE" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_facebook_b.png")} alt="FACEBOOK"/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/twice" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_youtube_b.png")} alt="YOUTUBE"/>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@twice_tiktok_official" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_tiktok_b.png")} alt="TIKTOK"/>
              </a>
            </li>
            <li>
              <a href="https://fans.jype.com/twice" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_fans_b.png")} alt="FANS"/>
              </a>
            </li>
            <li >
              <a href="https://thejypshop.com/twice.html" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_shop_b.png")} alt="SHOP"/>
              </a>
            </li>
          </ul>
        </div>
      );
    case 'black-vertical':
      return (
        <div className={styles.footer}>
          <p className={`${styles.copyRight} ${styles.black}`}>
            Copyright ©
            <span>JYP</span>
            ENTERTAINMENT Co., Ltd. All rights reserved.
          </p>
          <ul className={`${styles.sns} ${styles.vertical}`}>
            <li>
              <a href="https://instagram.com/twicetagram" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_instagram_b.png")} alt="INSTAR"/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/JYPETWICE" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_twitter_b.png")} alt="TWITER"/>
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/JYPETWICE" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_facebook_b.png")} alt="FACEBOOK"/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/twice" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_youtube_b.png")} alt="YOUTUBE"/>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@twice_tiktok_official" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_tiktok_b.png")} alt="TIKTOK"/>
              </a>
            </li>
            <li>
              <a href="https://fans.jype.com/twice" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_fans_b.png")} alt="FANS"/>
              </a>
            </li>
            <li >
              <a href="https://thejypshop.com/twice.html" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_shop_b.png")} alt="SHOP"/>
              </a>
            </li>
          </ul>
        </div>
      );
    default:
      return (
        <div className={styles.footer}>
          <p className={styles.copyRight}>
            Copyright ©
            <span>JYP</span>
            ENTERTAINMENT Co., Ltd. All rights reserved.
          </p>
          <ul className={styles.sns}>
            <li>
              <a href="https://instagram.com/twicetagram" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_instagram.png")} alt="INSTAR"/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/JYPETWICE" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_twitter.png")} alt="TWITER"/>
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/JYPETWICE" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_facebook.png")} alt="FACEBOOK"/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/twice" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_youtube.png")} alt="YOUTUBE"/>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@twice_tiktok_official" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_tiktok.png")} alt="TIKTOK"/>
              </a>
            </li>
            <li>
              <a href="https://fans.jype.com/twice" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_fans.png")} alt="FANS"/>
              </a>
            </li>
            <li >
              <a href="https://thejypshop.com/twice.html" target="_blank" rel="noreferrer">
                <img src={require("../img/sns/sns_shop.png")} alt="SHOP"/>
              </a>
            </li>
          </ul>
        </div>
      );
  }
}

export default Footer;