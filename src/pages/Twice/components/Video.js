import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import styles from './Video.module.css'

function Video() {
  document.title = "TWICE: Video"
  const switchVideo = (id) => {
    switch (id) {
      case '218':
        document.getElementById("iframe").src = "https://www.youtube.com/embed/w4cTYnOPdNk"        
        break;
      case '217':
        document.getElementById("iframe").src = "https://www.youtube.com/embed/cKlEE_EYuNM";
        break;
      case '194':
        document.getElementById("iframe").src = "https://www.youtube.com/embed/k6jqx9kZgPM";
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Header type='black'></Header>
      <Nav></Nav>
      <div className={`${styles.container} wow fadeInUp`} data-wow-duration='1s'>
        <div className={styles.title}>VIDEO</div>
        <div className={styles.video}>
          <div>
            <iframe id="iframe" src="https://www.youtube.com/embed/w4cTYnOPdNk" title='twice music video' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true} ></iframe>
          </div>
          <div className={styles.videoList}>
            <button onClick={() => switchVideo('218')}>
              <img alt="SET ME FREE" src={require('../img/vedio/setmefree.png')} />
              <div className={styles.listHover}>
                <svg enableBackground="new 0 0 191.5 191.5" viewBox="0 0 191.5 191.5" fill="white"><path d="M95.8 191.5c-52.8 0-95.8-42.9-95.8-95.7s43-95.8 95.8-95.8 95.8 43 95.8 95.8-43 95.7-95.8 95.7zm0-188c-50.9 0-92.3 41.4-92.3 92.3s41.4 92.2 92.3 92.2 92.2-41.4 92.2-92.2-41.4-92.3-92.2-92.3zM92.6 81l22.6 14.8-22.6 14.7"></path></svg>
              </div>
              <div className={styles.txt}>
                  <span>SET ME FREE</span>
                  <span>2023-03-10</span>
              </div>
            </button>
            <button onClick={() => switchVideo('217')}>
              <img alt="MOONLIGHT SUNRISE" src={require('../img/vedio/moonlightsunrise.png')} />
              <div className={styles.listHover}>
                <svg enableBackground="new 0 0 191.5 191.5" viewBox="0 0 191.5 191.5" fill="white"><path d="M95.8 191.5c-52.8 0-95.8-42.9-95.8-95.7s43-95.8 95.8-95.8 95.8 43 95.8 95.8-43 95.7-95.8 95.7zm0-188c-50.9 0-92.3 41.4-92.3 92.3s41.4 92.2 92.3 92.2 92.2-41.4 92.2-92.2-41.4-92.3-92.2-92.3zM92.6 81l22.6 14.8-22.6 14.7"></path></svg>
              </div>
              <div className={styles.txt}>
                  <span>MOONLIGHT SUNRISE</span>
                  <span>2023-01-20</span>
              </div>
            </button>
            <button onClick={() => switchVideo('194')}>
              <img alt="Talk that Talk" src="https://lv2-cdn.azureedge.net/twice/0e43468c122244fc88c66e776b572983-TWICE_BETWEEN%201&amp;2_Talk%20that%20Talk_THUMBNAIL.png" />
              <div className={styles.listHover}>
                <svg enableBackground="new 0 0 191.5 191.5" viewBox="0 0 191.5 191.5" fill="white"><path d="M95.8 191.5c-52.8 0-95.8-42.9-95.8-95.7s43-95.8 95.8-95.8 95.8 43 95.8 95.8-43 95.7-95.8 95.7zm0-188c-50.9 0-92.3 41.4-92.3 92.3s41.4 92.2 92.3 92.2 92.2-41.4 92.2-92.2-41.4-92.3-92.2-92.3zM92.6 81l22.6 14.8-22.6 14.7"></path></svg>
              </div>
              <div className={styles.txt}>
                  <span>Talk that Talk</span>
                  <span>2022-08-26</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Footer type='black-vertical'></Footer>
    </>
  );
}

export default Video;