import React from "react";
import { Helmet } from "react-helmet";

import styles from "./styles/About.module.css";

import helmet from "../images/react-helmet.PNG";

const About = (props) => {
  return (
    <>
      <Helmet>
        <meta name="description" content="here is some more information" />
        <title>About page</title>
      </Helmet>
      <main style={{ marginTop: "60px" }}>
        <div className={styles.container}>
          <div className={styles.shapes}></div>
          <div className={styles.box}>
            <div className={styles.boxContent}>
              <h1>Shoping project</h1>
              <h3>technologies used:</h3>
              <div className={styles.listflex}>
                <ul className={styles.list}>
                  <li>react</li>
                  <li>react router dom</li>
                  <li>react helmet</li>
                  <li>react scroll parallax</li>
                  <li>styled components</li>
                  <li>axios</li>
                </ul>
                <div className={styles.logosContainer}>
                  <img src={helmet} alt="" className={styles.helmet} />
                </div>
              </div>
              <a
                href="https://github.com/amirhrb/shopping"
                target="_blank"
                referrer="no-referrer"
                rel="noreferrer"
              >
                Amirhosein Hrb
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
