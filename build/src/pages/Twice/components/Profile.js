import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import styles from './Profile.module.css'

function Profile() {
    const [currentOn, setCurrentOn] = useState('214')
    const switchMember = (id) => {
        document.getElementById(currentOn).style.display = 'none'
        document.getElementById(id).style.display = 'block'
        setCurrentOn(id)
    }
    document.title = "TWICE: Profile"
    return (
        <>
            <Header type='black'></Header>
            <Nav></Nav>
            <div className={`${styles.profile} wow fadeInUp`} data-wow-duration='1s'>
                <div className={styles.member}>
                    <button onClick={() => switchMember('214')}>NAYEON</button>
                    <button onClick={() => switchMember('215')}>JEONGYEON</button>
                    <button onClick={() => switchMember('216')}>MOMO</button>
                    <button onClick={() => switchMember('217')}>SANA</button>
                    <button onClick={() => switchMember('218')}>JIHYO</button>
                    <button onClick={() => switchMember('219')}>MINA</button>
                    <button onClick={() => switchMember('220')}>DAHYUN</button>
                    <button onClick={() => switchMember('221')}>CHAEYOUNG</button>
                    <button onClick={() => switchMember('222')}>TZUYU</button>
                </div>
                <div className={styles.pfInner} id="214" style={{ display: "block" }}>
                    <div className={styles.pfImg}>
                        <div className={styles.colorBg}></div>
                        <div className={styles.artistImg}><img alt="NAYEON" width="455" height="580" src={require('../img/artist/nayeon.jpg')} /></div>
                    </div>
                    <div className={styles.pfTxt}>
                        <div className={styles.nameTt}>NAYEON</div>
                        <div>
                            이름 : 나연 <br />생일 : 1995.09.22
                        </div>
                    </div>
                </div>
                <div className={styles.pfInner} id="215" style={{ display: "none" }}>
                    <div className={styles.pfImg}>
                        <div className={styles.colorBg}></div>
                        <div className={styles.artistImg}><img alt="JEONGYEON" width="455" height="580" src={require('../img/artist/jeongyeon.jpg')} /></div>
                    </div>
                    <div className={styles.pfTxt}>
                        <div className={styles.nameTt}>JEONGYEON</div>
                        <div>
                            이름 : 정연<br />생일 : 1996.11.01
                        </div>
                    </div>
                </div>
                <div className={styles.pfInner} id="216" style={{ display: "none" }}>
                    <div className={styles.pfImg}>
                        <div className={styles.colorBg}></div>
                        <div className={styles.artistImg}><img alt="MOMO" width="455" height="580" src={require('../img/artist/momo.jpg')} /></div>
                    </div>
                    <div className={styles.pfTxt}>
                        <div className={styles.nameTt}>MOMO</div>
                        <div>
                            이름 : 모모<br />생일 : 1996.11.09
                        </div>
                    </div>
                </div>
                <div className={styles.pfInner} id="217" style={{ display: "none" }}>
                    <div className={styles.pfImg}>
                        <div className={styles.colorBg}></div>
                        <div className={styles.artistImg}><img alt="SANA" width="455" height="580" src={require('../img/artist/sana.jpg')} /></div>
                    </div>
                    <div className={styles.pfTxt}>
                        <div className={styles.nameTt}>SANA</div>
                        <div>
                            이름 : 사나<br />생일 : 1996.12.29
                        </div>
                    </div>
                </div>
                <div className={styles.pfInner} id="218" style={{ display: "none" }}>
                    <div className={styles.pfImg}>
                        <div className={styles.colorBg}></div>
                        <div className={styles.artistImg}><img alt="JIHYO" width="455" height="580" src={require('../img/artist/jihyo.jpg')} /></div>
                    </div>
                    <div className={styles.pfTxt}>
                        <div className={styles.nameTt}>JIHYO</div>
                        <div>
                            이름 : 지효 <br />생일 : 1997.02.01
                        </div>
                    </div>
                </div>
                <div className={styles.pfInner} id="219" style={{ display: "none" }}>
                    <div className={styles.pfImg}>
                        <div className={styles.colorBg}></div>
                        <div className={styles.artistImg}><img alt="MINA" width="455" height="580" src={require('../img/artist/mina.jpg')} /></div>
                    </div>
                    <div className={styles.pfTxt}>
                        <div className={styles.nameTt}>MINA</div>
                        <div>
                            이름 : 미나 <br />생일 : 1997.03.24
                        </div>
                    </div>
                </div>
                <div className={styles.pfInner} id="220" style={{ display: "none" }}>
                    <div className={styles.pfImg}>
                        <div className={styles.colorBg}></div>
                        <div className={styles.artistImg}><img alt="DAHYUN" width="455" height="580" src={require('../img/artist/dahyun.jpg')} /></div>
                    </div>
                    <div className={styles.pfTxt}>
                        <div className={styles.nameTt}>DAHYUN</div>
                        <div>
                            이름 : 다현<br />생일 : 1998.05.28
                        </div>
                    </div>
                </div>
                <div className={styles.pfInner} id="221" style={{ display: "none" }}>
                    <div className={styles.pfImg}>
                        <div className={styles.colorBg}></div>
                        <div className={styles.artistImg}><img alt="CHAEYOUNG" width="455" height="580" src={require('../img/artist/chaeyoung.jpg')} /></div>
                    </div>
                    <div className={styles.pfTxt}>
                        <div className={styles.nameTt}>CHAEYOUNG</div>
                        <div>
                            이름 : 채영<br />생일 : 1999.04.23
                        </div>
                    </div>
                </div>
                <div className={styles.pfInner} id="222" style={{ display: "none" }}>
                    <div className={styles.pfImg}>
                        <div className={styles.colorBg}></div>
                        <div className={styles.artistImg}><img alt="TZUYU" width="455" height="580" src={require('../img/artist/tzuyu.jpg')} /></div>
                    </div>
                    <div className={styles.pfTxt}>
                        <div className={styles.nameTt}>TZUYU</div>
                        <div>
                            이름 : 쯔위<br />생일 : 1999.06.14
                        </div>
                    </div>
                </div>
            </div>
            <Footer type='black'></Footer>
        </>
    );
}

export default Profile