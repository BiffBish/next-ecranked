import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import { LinkButton } from "../components/Buttons";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecranked</title>
        <meta name="description" content="AHAHAH" />
      </Head>
      {/* nav bar */}

      {/* Banner */}
      <Banner title="ECRanked" />
      <LinkButton href="/about">
        About
      </LinkButton>
      {/* Main */}
    </div>
  );
};

export default Home;
