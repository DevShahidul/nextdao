import Moment from "moment";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Accordion, Footer, Header, Modal } from "../components";
import { accordionContents } from "../components/accordion-pane/accordionContent";
import { ExternalLink, Icon3line } from "../components/icons";
import { BlogSection, HeroSection } from "../components/page-layouts";
import { biddingData } from "../components/page-layouts/hero-section/biding-data";
import modal_figure from "../public/images/modal_figure.png";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isHistory, setIsHistory] = useState(false);

  const maskId = (id) => {
    const str = id + "";
    const first = str.slice(0, 4);
    const last = str.slice(-4);
    return first + last.padStart(8, ".");
  };

  return (
    <div className={`d-flex direction-column ${styles.page_container}`}>
      <Head>
        <title>Writer's Bloc | Home</title>
        <meta name="description" content="Literature for the digital age" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <HeroSection handleIsHistory={() => setIsHistory(!isHistory)} />
        <BlogSection />
        <section className={styles.accordion_section}>
          <div className="container">
            <Accordion panels={accordionContents} />
          </div>
        </section>
      </main>
      <Footer />
      {isHistory && (
        <Modal handleClose={() => setIsHistory(false)}>
          <div className={`d-flex align-center ${styles.modal_title_row}`}>
            <figure className={styles.modal_figure}>
              <Image
                src={modal_figure}
                width={190}
                height={190}
                alt="Modal figure"
              />
            </figure>
            <div className={styles.title_content}>
              <h3>Bids for</h3>
              <h2>Bloc 299</h2>
            </div>
          </div>
          <div className={styles.bid_items_wrap}>
            <ul className={styles.bid_items_list}>
              {biddingData.map((item, index) => {
                const { avatar, owner_id, held_url } = item.owner;
                const { date } = item;
                return (
                  <li
                    className={`d-flex align-center ${styles.list_item}`}
                    key={`biding_${maskId(owner_id)}_${index}`}
                  >
                    <div className={`d-flex align-center ${styles.author}`}>
                      <figure className={styles.author_img}>
                        <Image
                          src={avatar}
                          alt={maskId(owner_id)}
                          width={36}
                          height={36}
                        />
                      </figure>
                      <div className={styles.author_info}>
                        <span className={styles.author_id}>
                          {maskId(owner_id)}
                        </span>
                        <span className={styles.biding_time}>
                          {Moment(date).format("MMM D, YYYY, h:mm A")}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`d-flex align-center ml-auto ${styles.biding_amount}`}
                    >
                      <Icon3line className={styles.biding_amount_icon} />
                      <span className={styles.biding_amount_text}>
                        {item.bid_amount}
                      </span>
                      <a href={held_url} className={styles.external_link}>
                        <ExternalLink />
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
