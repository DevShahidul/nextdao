import React from 'react';
import { ArrowDown } from '../icons';
import styles from './Accordion.module.css';

const Accordion = (props) => {
    const {title, content, handleClick, ariaExpanded} = props;
  return (
    <div className={styles.accordion_item} key={`accordion_${title.replace(' ', '_')}`}>
        <h3 className={ariaExpanded === true ? `d-flex align-center ${styles.accordion_title} ${styles.accordion_title_active}` : `d-flex align-center ${styles.accordion_title}`} onClick={handleClick}>
            {title} 
            <button className={ariaExpanded === true ? `btn ml-auto d-flex align-center justify-center ${styles.accordion_btn} ${styles.accordion_btn_active}` : `btn ml-auto d-flex align-center justify-center ${styles.accordion_btn}`}>
                <ArrowDown className={styles.arrow} />
            </button>
        </h3>
        <div className={ariaExpanded === true ? `${styles.content} ${styles.content_active}` : styles.content}>{content.map((des,i) => {
            return <p key={`accordion_content_${i+1}`}>{des}</p>;
        })}</div>
    </div>
  )
}
export default Accordion;