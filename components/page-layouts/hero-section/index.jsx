import axios from 'axios';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
// import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import author_thumb1 from '../../../public/images/biding-author/author_thumb1.png';
import author_thumb2 from '../../../public/images/biding-author/author_thumb2.png';
import thumb_1 from '../../../public/images/hero-slider/thumb_1.jpg';
import thumb_2 from '../../../public/images/hero-slider/thumb_2.jpg';
import { LeftArrow, RightArrow } from "../../icons";
import { BidingSlide } from './bidingSlide';
import { biddingData } from './biding-data';
import styles from './HeroSection.module.css';

const HeroSection = ({handleIsHistory}) => {
    //Biding items
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isFirstBid, setIsFirstBid] = useState(true);
    const [isLastBid, setIsLastBid] = useState(false);
    const [currentBid, setCurrentBid] = useState({});
    const [currentBidIndex, setCurrentBidIndex] = useState(0);
    const [seconds, setSeconds] = useState(216000);
    
    useEffect(() => {
        const fetchBids = async () => {
            const {data: result} = await axios.get("https://jsonplaceholder.typicode.com/users");
           
            setBids(biddingData);
            setLoading(false);
            
            setCurrentBid(biddingData[currentBidIndex]);
            console.log(result);
           
        }
        fetchBids();

        // console.log('Time:', formatedTime(1440));
    }, [setBids, setLoading]);

    useEffect(() => {
        if(seconds > 0){
           const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
           seconds === 0 && clearTimeout(timer);
        }
    }, [seconds])

    console.log('Bids: ', bids, 'currentbids', currentBid);

    const gotoNext = () => {
        const indx = currentBidIndex - 1;
        if(indx === 0) setIsFirstBid(true);
        if(isFirstBid !== true && currentBidIndex !== 0){
            setIsLastBid(false);
            // console.log(indx, currentBidIndex);
            setCurrentBidIndex(indx)
            setCurrentBid(bids[indx]);
        }
    }
    
    const gotoPrev = () => {
        const indx = currentBidIndex + 1;
        // console.log(bids.length, currentBidIndex);
        if(indx === bids.length - 1) setIsLastBid(true);
        if(isLastBid !== true && currentBidIndex >= 0){
            setIsFirstBid(false);
            console.log(indx);
            setCurrentBidIndex(indx)
            setCurrentBid(bids[indx]);
        }
        // nav1.slickPrev();
    }

    const date = new Date();
    const year = date.getFullYear();
    const day = String(date.getDate()).padStart(2, 0);
    const month = date.toLocaleString('default', {month: 'long'});
    const formatedDate = `${month} ${day}, ${year}`;

  return (
    <section className={styles.hero_section}>
        <div className={styles.hero_thumb}>
            <div className={styles.slide_thumb} key={`hero_thumb_`}>
                {console.log("Carac:", currentBid.character)}
                <Image src={`/${currentBid.character}`} width={1920} height={780} alt="Hero Slider image" key={`slide_`}/>
            </div>
        </div>
        <div className={`container d-flex ${styles.hero_container}`}>
            <div className={styles.hero_content}>
                <div className={`d-flex align-center justify-center ${styles.slide_nav_row}`}>
                    <div className={`d-flex align-center ${styles.slide_nav}`}>
                        <button className={`btn d-flex align-center justify-center slidePrev-btn ${styles.slide_btn} ${isLastBid && styles.disable} `} onClick={gotoPrev}>
                        <LeftArrow />
                        </button>
                        <button className={`btn d-flex align-center justify-center slideNext-btn ${styles.slide_btn} ${isFirstBid && styles.disable} `} onClick={gotoNext}>
                        <RightArrow />
                        </button>
                    </div>
                    <div className={styles.date}>{formatedDate}</div>
                </div>
                <div className={styles.content_wrap}>
                    {loading ? <h2>Loadinng...</h2> : (
                        <BidingSlide countdown={seconds} currentBid={currentBid} bids={bids} isFirstBid={isFirstBid} handleIsHistory={handleIsHistory} />
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}
export default HeroSection;