import Image from "next/image";
import React from 'react';
import discord_icon from '../../public/images/discord_icon.png';
import etherscan_icon from '../../public/images/etherscan_icon.png';
import forums_icon from '../../public/images/forums_icon.png';
import twitter_icon from '../../public/images/twitter_icon.png';
import styles from './Footer.module.css';


const footerLinks = [
    {
        title: 'Discord', 
        thumb: discord_icon,
        hrefLink: '#'
    },
    {
        title: 'Twitter', 
        thumb: twitter_icon,
        hrefLink: '#'
    },
    {
        title: 'Etherscan', 
        thumb: etherscan_icon,
        hrefLink: '#'
    },
    {
        title: 'Forums', 
        thumb: forums_icon,
        hrefLink: '#'
    }
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <div className={`${styles.link_row} d-flex align-center justify-center`}>
                {footerLinks.map((item, index) => {
                    return (
                        <a href={item.hrefLink} target="_blank" rel="noreferrer" className={`${styles.item_link} d-flex align-center`} key={`${item}_${index}`}>
                            <figure className={styles.item_logo}>
                                <Image src={item.thumb} alt={`${item.title} Logo`} width={20} height={20} />
                            </figure>
                            <span className={styles.item_text}>{item.title}</span>
                        </a>
                    );
                })}
            </div>
        </div>
      </footer>
  )
}
export default Footer;