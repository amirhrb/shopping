import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { validate } from "../helper/functions";

//styles
import styles from "./styles/Signup.module.css";

const Login = () => {
  //woeuefhcow
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [active, setActive] = useState({});

  useEffect(() => {
    setError(validate(data));
  }, [data, active, error]);

  const Focused = (e) => {
    setActive({ ...active, [e.target.name]: true });
  };

  const Handler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const Login = (e) => {
    e.preventDefault();
    setActive({ email: true, password: true });
  };
  return (
    <>
      <Helmet>
        <meta name="description" content="here you can Login!" />
        <title>Login</title>
      </Helmet>
      <div className={styles.cont}>
        <form className={styles.form} onSubmit={Login}>
          <h1>Login</h1>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={Handler}
            onBlur={Focused}
            placeholder="example@email.com"
          />
          {error.email && active.email && <span>{error.email}</span>}
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={Handler}
            onBlur={Focused}
            placeholder="number, string,..."
          />
          {error.password && active.password && <span>{error.password}</span>}

          <button className={styles.loginBtn}>Login</button>
          <Link to="/home/signup" className={styles.link}>
            Sign Up
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
