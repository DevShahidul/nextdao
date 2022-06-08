import Image from "next/image";
import React, { useRef, useState } from 'react';
import { EffectFade, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { InputField } from '../..';
import author_thumb1 from '../../../public/images/biding-author/author_thumb1.png';
import author_thumb2 from '../../../public/images/biding-author/author_thumb2.png';
import thumb_1 from '../../../public/images/hero-slider/thumb_1.jpg';
import { BirthCake, ExternalLink, HelpIcon, Icon3line, LeftArrow, LoveIcon, RightArrow, StackedFiles, VerifiedIcon } from "../../icons";
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

const HeroSection = ({handleIsHistory}) => {
    const swiperPrevRef = useRef(null);
    const swiperNextRef = useRef(null);
    const [bidField, setBidField] = useState('');
  return (
    <section className={styles.hero_section}>
        <div className={styles.hero_thumb}>
            <Image src={thumb_1} width={1920} height={780} />
        </div>
        <div className={`container d-flex ${styles.hero_container}`}>
            <div className={styles.hero_content}>
                <div className={`d-flex align-center justify-center ${styles.slide_nav_row}`}>
                <div className={`d-flex align-center ${styles.slide_nav}`}>
                    <button className={`btn d-flex align-center justify-center ${styles.slide_prev}`} ref={swiperPrevRef}>
                    <LeftArrow />
                    </button>
                    <button className={`btn d-flex align-center justify-center ${styles.slide_prev}`} ref={swiperNextRef}>
                    <RightArrow />
                    </button>
                </div>
                <div className={styles.date}>June 01, 2022</div>
                </div>
                <div className={styles.content_wrap}>
                <Swiper
                    modules={[Navigation,EffectFade]}
                    effect="fade"
                    spaceBetween={50}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                    prevEl: swiperPrevRef.current,
                    nextEl: swiperNextRef.current,
                    }}
                >
                    <SwiperSlide>
                    <h2 className={styles.content_title}>Bloc 298</h2>
                    <div className={`d-flex justify-center ${styles.bid_info_row}`}>
                        <div className={styles.info_col}>
                        <span className={styles.info_label}>Current bid</span>
                        <div className={`d-flex align-center ${styles.info_content}`}>
                            <Icon3line className={styles.icon3line} />
                            <span className={styles.info_text}>69.87</span>
                        </div>
                        </div>
                        <div className={styles.info_col}>
                        <span className={styles.info_label}>Auction ends in</span>
                        <div className={`d-flex align-center ${styles.info_content}`}>
                            <span className={styles.info_text}>12h 43m 6s</span>
                        </div>
                        </div>
                    </div>
                    <div className={`d-flex align-center justify-center ${styles.help_row}`}>
                        <a href="#" className="d-flex align-center">
                        <HelpIcon className={styles.help_icon} />
                        <span>Help mint the next Bloc</span>
                        </a>
                    </div>
                    <div className={styles.form_warp}>
                        <form>
                        <div className={styles.place_bid_row}>
                            <Icon3line className={styles.field_icon} />
                            <InputField id='bid_field' name='bid_field' placeholder='71.56 or more' value={bidField} handleChange={setBidField} type='text' />
                            <button className={`btn ${styles.btn_place_bid}`}>Place bid</button>
                        </div>
                        </form>
                    </div>
                    <div className={styles.bid_items_wrap}>
                        <ul className={styles.bid_items_list}>
                        {bidingListContents.map((item, index) => {
                            return (
                            <li className={`d-flex align-center ${styles.list_item}`} key={`biding_item_${index}`}>
                            <div className={`d-flex align-center ${styles.author}`}>
                                <figure className={styles.author_img}>
                                <Image src={item.authorImg} alt={item.id} width={36} height={36} />
                                </figure>
                                <span className={styles.author_id}>{item.id}</span>
                            </div>
                            <div className={`d-flex align-center ml-auto ${styles.biding_amount}`}>
                                <Icon3line className={styles.biding_amount_icon} />
                                <span className={styles.biding_amount_text}>{item.amount}</span>
                                <a href="#" className={styles.external_link}>
                                <ExternalLink />
                                </a>
                            </div>
                            </li>);
                        })}
                        </ul>
                        <a href="#" className={styles.view_all_bids_link}>View all bids</a>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <h2 className={styles.content_title}>Bloc 298</h2>
                    <div className={`d-flex justify-center ${styles.bid_info_row}`}>
                        <div className={styles.info_col}>
                        <span className={styles.info_label}>Winning bid</span>
                        <div className={`d-flex align-center ${styles.info_content}`}>
                            <Icon3line className={styles.icon3line} />
                            <span className={styles.info_text}>69.87</span>
                        </div>
                        </div>
                        <div className={styles.info_col}>
                        <span className={styles.info_label}>Winner</span>
                        <div className={`d-flex align-center ${styles.info_content}`}>
                            <div className={styles.content_figure}>
                            <Image src={author_thumb2} alt="Winner thumb" width={36} height={36} />
                            </div>
                            <span className={styles.info_text}>0xC8...038d</span>
                        </div>
                        </div>
                    </div>
                    <div className={styles.bid_winner_info_wrap}>
                        <ul className={styles.winner_info_items_list}>
                            <li className={`d-flex align-center justify-center ${styles.winner_info_item}`}>
                            <BirthCake className={`${styles.info_icon} ${styles.birth_cake}`} />
                            <span className={styles.info_label}>Born</span>
                            <span className={styles.info_text}>Born June 05, 2022</span>
                            </li>
                            <li className={`d-flex align-center justify-center ${styles.winner_info_item}`}>
                            <LoveIcon className={`${styles.info_icon} ${styles.love_icon}`} />
                            <span className={styles.info_label}>Held by</span>
                            <span className={styles.info_text}>0x47...c7e9</span>
                            <a href="#" className={styles.external_link}>
                                <ExternalLink />
                            </a>
                            </li>
                        </ul>
                        <div className={`d-flex justify-center ${styles.btn_row}`}>
                        <button className={`btn d-flex align-center ${styles.winner_info_btn} ${styles.btn_bid_history}`} onClick={handleIsHistory}>
                            <StackedFiles className={styles.btn_icon} />
                            <span className={styles.btn_text}>Bid history</span>
                        </button>
                        <button className={`btn d-flex align-center ${styles.winner_info_btn} ${styles.btn_etherscan}`}>
                            <VerifiedIcon className={styles.btn_icon} />
                            <span className={styles.btn_text}>Etherscan</span>
                        </button>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}
export default HeroSection;