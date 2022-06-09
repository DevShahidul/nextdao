import Image from "next/image";
import React, { useState } from 'react';
import author_thumb1 from '../../../public/images/biding-author/author_thumb1.png';
import { BirthCake, ExternalLink, HelpIcon, Icon3line, LoveIcon, StackedFiles, VerifiedIcon } from "../../icons";
import InputField from '../../input-field';
import styles from './HeroSection.module.css';

export const BidingSlide = ({currentBid, bids, isFirstBid, handleIsHistory}) => {
    const {id, bid_amount, owner} = currentBid;
    const {owner_id, avatar, born, held_by, held_url} = owner;

    // const {address, id, username, website} = currentBid;
    // const bid_amount = address.geo.lng;
    // const owner_id = address.zipcode;
    // const avatar = author_thumb1;
    // const born = 'Jun 09, 2022';
    // const held_by = username;
    // const held_url = website;

    const maskId = (id) => {
        const str = id + '';
        const first = str.slice(0,4);
        const last = str.slice(-4);
        return first+last.padStart(8, '.');
    }

    console.log(maskId(owner_id));
    
    const [bidField, setBidField] = useState('');
    const onHandleChange = (e) => setBidField(e.target.value);
  return (
    <div>
        { isFirstBid ? (
            <div className={styles.slide_item}>
                <h2 className={styles.content_title}>Bloc {id}</h2>
                <div className={`d-flex justify-center ${styles.bid_info_row}`}>
                    <div className={styles.info_col}>
                    <span className={styles.info_label}>Current bid</span>
                    <div className={`d-flex align-center ${styles.info_content}`}>
                        <Icon3line className={styles.icon3line} />
                        <span className={styles.info_text}>{bid_amount}</span>
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
                            <InputField id='bid_field' name='bid_field' placeholder='71.56 or more' handleChange={onHandleChange} value={bidField} type='text' />
                            <button className={`btn ${styles.btn_place_bid}`} onClick={(e) => e.preventDefault()}>Place bid</button>
                        </div>
                    </form>
                </div>
                <div className={styles.bid_items_wrap}>
                    <ul className={styles.bid_items_list}>
                    {bids.map((item, index) => {
                        // const owner_id = item.address.zipcode;
                        // const bid_amount = item.address.geo.lng;

                        const {bid_amount} = item;
                        const {owner_id, avatar} = item.owner;
                        return (
                        <li className={`d-flex align-center ${styles.list_item}`} key={`biding_item_${index}`}>
                            <div className={`d-flex align-center ${styles.author}`}>
                                <figure className={styles.author_img}>
                                    <Image src={avatar} alt={owner_id} width={36} height={36} />
                                </figure>
                                <span className={styles.author_id}>{maskId(owner_id)}</span>
                            </div>
                            <div className={`d-flex align-center ml-auto ${styles.biding_amount}`}>
                                <Icon3line className={styles.biding_amount_icon} />
                                <span className={styles.biding_amount_text}>{Math.abs(bid_amount)}</span>
                                <a href="#" className={styles.external_link}>
                                    <ExternalLink />
                                </a>
                            </div>
                        </li>);
                    })}
                    </ul>
                    <a href="#" onClick={handleIsHistory} className={styles.view_all_bids_link}>View all bids</a>
                </div>
            </div>
        ) : (
            <div className={styles.slide_item}>
                <h2 className={styles.content_title}>Bloc {id}</h2>
                <div className={`d-flex justify-center ${styles.bid_info_row}`}>
                    <div className={styles.info_col}>
                        <span className={styles.info_label}>Winning bid</span>
                        <div className={`d-flex align-center ${styles.info_content}`}>
                            <Icon3line className={styles.icon3line} />
                            <span className={styles.info_text}>{Math.abs(bid_amount)}</span>
                        </div>
                    </div>
                    <div className={styles.info_col}>
                        <span className={styles.info_label}>Winner</span>
                        <div className={`d-flex align-center ${styles.info_content}`}>
                            <div className={styles.content_figure}>
                                <Image src={avatar} alt="Winner thumb" width={36} height={36} />
                            </div>
                            <span className={styles.info_text}>{maskId(owner_id)}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.bid_winner_info_wrap}>
                    <ul className={styles.winner_info_items_list}>
                        <li className={`d-flex align-center justify-center ${styles.winner_info_item}`}>
                            <BirthCake className={`${styles.info_icon} ${styles.birth_cake}`} />
                            <span className={styles.info_label}>Born</span>
                            <span className={styles.info_text}>{born}</span>
                        </li>
                        <li className={`d-flex align-center justify-center ${styles.winner_info_item}`}>
                            <LoveIcon className={`${styles.info_icon} ${styles.love_icon}`} />
                            <span className={styles.info_label}>Held by</span>
                            <span className={styles.info_text}>{maskId(held_by)}</span>
                            <a href={held_url} className={styles.external_link}>
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
            </div>
        )}
    </div>
  )
}
