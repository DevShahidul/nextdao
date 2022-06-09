import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Accordion, Footer, Header, Modal } from '../components';
import { accordionContents } from '../components/accordion-pane/accordionContent';
import { ExternalLink, Icon3line } from "../components/icons";
import { BlogSection, HeroSection } from '../components/page-layouts';
// import Gallery from '../components/slider';
import author_thumb1 from '../public/images/biding-author/author_thumb1.png';
import author_thumb2 from '../public/images/biding-author/author_thumb2.png';
import modal_figure from '../public/images/modal_figure.png';
import styles from "../styles/Home.module.css";


const modalBidingListContents = [
  {
    id: 'deeze.eth',
    authorImg: author_thumb1,
    amount: '69.67',
    date: 'Jun 6, 2022, 7:25 AM'
  },
  {
    id: '0xC8...038d',
    authorImg: author_thumb2,
    amount: '89.79',
    date: 'Jun 6, 2022, 7:25 AM'
  },
  {
    id: 'deeze.eth',
    authorImg: author_thumb2,
    amount: '89.79',
    date: 'Jun 6, 2022, 7:25 AM'
  },
  {
    id: '0xC8...038d',
    authorImg: author_thumb2,
    amount: '89.79',
    date: 'Jun 6, 2022, 7:25 AM'
  },
]

const Home: NextPage = () => {
  // SwiperCore.use([Navigation]);
  const [isHistory, setIsHistory] = useState(false);

  return (
    <div className={`d-flex direction-column ${styles.page_container}`}>
      <Head>
        <title>Writer's Bloc | Home</title>
        <meta name="description" content="Literature for the digital age" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header /> 
      <main className={styles.main}>
        <HeroSection handleIsHistory={()=> setIsHistory(!isHistory)} />
        <BlogSection />
        {/* <Gallery /> */}
        <section className={styles.accordion_section}>
          <div className="container">
            <Accordion panels={ accordionContents } />
          </div>
        </section>
      </main>
      <Footer />
      {isHistory && 
        (<Modal handleClose={() => setIsHistory(false)}>
          <div className={`d-flex align-center ${styles.modal_title_row}`}>
            <figure className={styles.modal_figure}>
              <Image src={modal_figure} width={190} height={190} alt="Modal figure" />
            </figure>
            <div className={styles.title_content}>
              <h3>Bids for</h3>
              <h2>Bloc  299</h2>
            </div>
          </div>
          <div className={styles.bid_items_wrap}>
            <ul className={styles.bid_items_list}>
              {modalBidingListContents.map((item, index) => {
                return (
                <li className={`d-flex align-center ${styles.list_item}`} key={`biding_item_${index}`}>
                  <div className={`d-flex align-center ${styles.author}`}>
                    <figure className={styles.author_img}>
                      <Image src={item.authorImg} alt={item.id} width={36} height={36} />
                    </figure>
                    <div className={styles.author_info}>
                      <span className={styles.author_id}>{item?.id}</span>
                      <span className={styles.biding_time}>{item?.date}</span>
                    </div>
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
          </div>
        </Modal>)
      }
    </div>
  );
};

export default Home;
