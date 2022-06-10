import Image from "next/image";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { LeftArrow, RightArrow } from "../../icons";
import { biddingData } from "./biding-data";
import { BidingSlide } from "./bidingSlide";
import styles from "./HeroSection.module.css";

const HeroSection = ({ handleIsHistory }) => {
  //Biding items
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isFirstBid, setIsFirstBid] = useState(true);
  const [isLastBid, setIsLastBid] = useState(false);
  const [currentBid, setCurrentBid] = useState({});
  const [currentBidIndex, setCurrentBidIndex] = useState(0);
  const [seconds, setSeconds] = useState(516000);

  useEffect(() => {
    const fetchBids = async () => {
      setBids(biddingData);
      setLoading(false);
      setCurrentBid(biddingData[currentBidIndex]);
    };
    fetchBids();
  }, [currentBidIndex, setBids, setLoading]);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      seconds === 0 && clearTimeout(timer);
    }
  }, [seconds]);

  const gotoNext = () => {
    const indx = currentBidIndex - 1;
    if (indx === 0) setIsFirstBid(true);
    if (isFirstBid !== true && currentBidIndex !== 0) {
      setIsLastBid(false);
      setCurrentBidIndex(indx);
      setCurrentBid(bids[indx]);
    }
  };

  const gotoPrev = () => {
    const indx = currentBidIndex + 1;
    if (indx === bids.length - 1) setIsLastBid(true);
    if (isLastBid !== true && currentBidIndex >= 0) {
      setIsFirstBid(false);
      setCurrentBidIndex(indx);
      setCurrentBid(bids[indx]);
    }
  };

  const date = new Date();
  const year = date.getFullYear();
  const day = String(date.getDate()).padStart(2, 0);
  const month = date.toLocaleString("default", { month: "long" });
  const formatedDate = `${month} ${day}, ${year}`;

  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_thumb}>
        <div className={styles.slide_thumb}>
          <Image
            src={`/${currentBid.character}`}
            width={1920}
            height={780}
            priority={false}
            alt="Hero Slider image"
          />
        </div>
      </div>
      <div className={`container d-flex ${styles.hero_container}`}>
        <div className={styles.hero_content}>
          <div
            className={`d-flex align-center justify-center ${styles.slide_nav_row}`}
          >
            <div className={`d-flex align-center ${styles.slide_nav}`}>
              <button
                className={`btn d-flex align-center justify-center slidePrev-btn ${
                  styles.slide_btn
                } ${isLastBid && styles.disable} `}
                onClick={gotoPrev}
              >
                <LeftArrow />
              </button>
              <button
                className={`btn d-flex align-center justify-center slideNext-btn ${
                  styles.slide_btn
                } ${isFirstBid && styles.disable} `}
                onClick={gotoNext}
              >
                <RightArrow />
              </button>
            </div>
            <div className={styles.date}>{formatedDate}</div>
          </div>
          <div className={styles.content_wrap}>
            {loading ? (
              <h2>Loadinng...</h2>
            ) : (
              <BidingSlide
                countdown={seconds}
                currentBid={currentBid}
                bids={bids}
                isFirstBid={isFirstBid}
                handleIsHistory={handleIsHistory}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
