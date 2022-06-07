import Image from 'next/image';
import React from 'react';
import logo from '../../public/images/header_logo.png';
import { Icon3line } from '../icons';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header_main}>
        <div className={`container ${styles.header_container}`}>
            <div className={`${styles.nav_row} d-flex align-center`}>
                <a href="" className={styles.logo}>
                    <Image src={logo} alt="Main logo" width={206} height={52} />
                </a>
                <button className={`btn ${styles.nav_toggler} ml-auto`}>
                    <span></span>
                </button>
                <div className={`ml-auto ${styles.nav_wrap}`}>
                    <div className={`d-flex align-center ${styles.nav}`}>
                        <button className={`btn d-flex align-center justify-center ${styles.nav_btn}`}>
                            <span className={styles.light_text}>Treasury</span>
                            <Icon3line className={styles.icon} />
                            <span className={styles.btn_text}>24,804</span>
                        </button>
                        <button className={`btn d-flex align-center justify-center ${styles.nav_btn}`}>
                            <span className={styles.btn_text}>Connect</span>
                        </button>
                        <button className={`btn d-flex align-center justify-center ${styles.nav_btn}`}>
                            <span className={styles.btn_text}>Docs</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
export default Header;