import type { NextPage } from "next";
import Head from "next/head";
import { Footer, Header } from '../components';
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={`d-flex direction-column ${styles.page_container}`}>
      <Head>
        <title>Writer's Bloc | Home</title>
        <meta name="description" content="Literature for the digital age" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header /> 
      <main className={styles.main}>
        <section className={styles.hero_section}>
          <div className="container">
            <div className={`d-flex ${styles.content_row}`}></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
