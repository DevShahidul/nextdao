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
import styles from './HeroSection.module.css';


const bidingListContents = [
    {
        id: 'deeze.eth',
        authorImg: author_thumb1,
        amount: '69.67'
    },
    {
        id: '0xC8...038d',
        authorImg: author_thumb2,
        amount: '89.79'
    },
]

const heroImages = [
    {
        thumb: thumb_1
    },
    {
        thumb: thumb_2
    },
]

const HeroSection = ({handleIsHistory}) => {
    //Biding items
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isFirstBid, setIsFirstBid] = useState(true);
    const [isLastBid, setIsLastBid] = useState(false);
    const [currentBid, setCurrentBid] = useState({});
    const [currentBidIndex, setCurrentBidIndex] = useState(0);

    useEffect(() => {
        const fetchBids = async () => {
            const {data: result} = await axios.get("https://jsonplaceholder.typicode.com/users");
           
            setBids(result);
            setLoading(false);
            
            setCurrentBid(result[currentBidIndex]);
            console.log(result);
           
        }
        fetchBids();
    }, [setBids, setLoading]);


    console.log('Bids: ', bids, 'currentbids', currentBid);

    const gotoNext = () => {
        if(currentBidIndex === 1) setIsFirstBid(true);
        if(isFirstBid !== true && currentBidIndex !== 0){
            setIsLastBid(false);
            const indx = currentBidIndex - 1;
            console.log(indx, currentBidIndex);
            setCurrentBidIndex(indx)
            setCurrentBid(bids[indx]);
        }
    }
    
    const gotoPrev = () => {
        console.log(bids.length, currentBidIndex);
        if(currentBidIndex === bids.length - 2) setIsLastBid(true);
        if(isLastBid !== true && currentBidIndex >= 0){
            setIsFirstBid(false);
            const indx = currentBidIndex + 1;
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
                <Image src={thumb_1} width={1920} height={780} alt="Hero Slider image" key={`slide_`}/>
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
                        <BidingSlide currentBid={currentBid} bids={bids} isFirstBid={isFirstBid} handleIsHistory={handleIsHistory} />
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}
export default HeroSection;