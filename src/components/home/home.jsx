import React from "react";
import Content from "../../content/content";
import Nav from "../nav/nav";
import styles from "./home.module.scss";

const Home = (props) => {
  return (
    <section className={styles.home}>
      <Nav />
      <Content />
    </section>
  );
};

export default Home;
