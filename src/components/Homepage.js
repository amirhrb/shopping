import React, { Children } from "react";
import { Route, Switch } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";

//styles
import styles from "./styles/Homepage.module.css";

//components
import Links from "./Links";
import Login from "./Login";
import Signup from "./Signup";

//img
import heroBg from "../images/will-rust.jpg";
import hero from "../images/will-rust.png";

const Homepage = (props) => {
  return (
    <ParallaxBanner
      layers={[
        {
          children: (
            <img
              src={heroBg}
              alt=""
              className={styles.heroBg}
              style={{ display: "none" }}
              onLoad={(e) => (e.target.style.display = "block")}
            />
          ),
          speed: -20,
        },
        {
          children: (
            <img
              src={hero}
              alt=""
              className={styles.hero}
              style={{ display: "none" }}
              onLoad={(e) => (e.target.style.display = "block")}
            />
          ),
          speed: -10,
        },
      ]}
    >
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
  );
};

export default Homepage;
