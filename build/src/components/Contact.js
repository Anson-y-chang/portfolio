import React from 'react';
import styles from "./Contact.module.css"

function Contact() {
  return (
    <div id="contact" className={styles.contact}>
      <div>Contact</div>
      <div>感谢关注！ 任何资讯欢迎随时联系！👇</div>
      <div className={styles.contactDetail}>
        <div>
          <img src={require('../img/gmail.svg.png')} alt="gmail" />
          <div className={styles.contactText}>
            <div>Email</div>
            <div>zhangshangdong888855@gmail.com</div>
            
            </div>
        </div>
        <div>
        <img src={require('../img/weixin.jpeg')} alt="gmail" />
        <div className={styles.contactText}>
          <div>Weixin</div>
          <div>Mugino12138</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;