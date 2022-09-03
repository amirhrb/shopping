import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import { Helmet } from "react-helmet";

//styles
import styles from "./styles/Homepage.module.css";

//components
import Links from "./Links";
import Login from "./Login";
import Signup from "./Signup";

//img
import heroBgDemo from "../images/will-rust-demo.jpg";
import heroBg from "../images/will-rust.jpg";
import hero from "../images/will-rust.png";

const Homepage = (props) => {
  const [isLoaded, setLoaded] = useState({ hero: false, heroBg: false });
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="here is homepage with parallax hero!"
        />
        <title>home</title>
      </Helmet>
      <ParallaxBanner
        layers={[
          {
            children: (
              <img
                src={heroBg}
                alt=""
                className={styles.heroBg}
                style={{
                  display: isLoaded.hero && isLoaded.heroBg ? "block" : "none",
                }}
                onLoad={() => setLoaded({ ...isLoaded, hero: true })}
              />
            ),
            speed: -20,
          },
          {
            children: (
              <img
                src={hero}
                alt="hero bg man standing on mountain"
                className={styles.hero}
                style={{
                  display: isLoaded.hero && isLoaded.heroBg ? "block" : "none",
                }}
                onLoad={() => setLoaded({ ...isLoaded, heroBg: true })}
              />
            ),
            speed: -10,
          },
        ]}
      >
        <img
          src={heroBgDemo}
          className={styles.heroBgDemo}
          alt="hero bg man standing on mountain"
          style={{
            display: !isLoaded.hero && !isLoaded.heroBg ? "block" : "none",
          }}
        />
        <div className={styles.mainpart}>
          <div className={styles.centered}>
            <Switch>
              <Route
                path="/home/login"
                render={(props) => <Login {...props} />}
              />
              <Route
                path="/home/signup"
                render={(props) => <Signup {...props} />}
              />
              <Route path="/home" component={Links} />
            </Switch>
          </div>
        </div>
      </ParallaxBanner>
    </>
  );
};

export default Homepage;
