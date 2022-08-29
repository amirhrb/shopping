import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./styles/Signup.module.css";

import { validate } from "../helper/functions";
import { Helmet } from "react-helmet";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    check: false,
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
    if (e.target.type !== "checkbox") {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    }
  };
  const SignUp = (e) => {
    e.preventDefault();
    setActive({
      ...active,
      name: true,
      email: true,
      password: true,
      confirm: true,
      check: true,
    });
  };
  return (
    <>
      <Helmet>
        <meta name="description" content="here you can sign up!" />
        <title>sign up</title>
      </Helmet>
      <div className={styles.cont}>
        <form className={styles.form} onSubmit={SignUp}>
          <h1>Sign Up</h1>
          <br />
          <label className={styles.labels}>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={Handler}
            onBlur={Focused}
            placeholder="john"
          />
          {error.name && active.name && <span>{error.name}</span>}
          <label className={styles.labels}>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={Handler}
            onBlur={Focused}
            placeholder="example@email.com"
          />
          {error.email && active.email && <span>{error.email}</span>}
          <label className={styles.labels}>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={Handler}
            onBlur={Focused}
            placeholder="number, string,..."
          />
          {error.password && active.password && <span>{error.password}</span>}
          <label className={styles.labels}>Confirm Password</label>
          <input
            type="password"
            name="confirm"
            value={data.confirm}
            onChange={Handler}
            placeholder="same as top ..."
            onBlur={Focused}
          />
          {error.confirm && active.confirm && <span>{error.confirm}</span>}

          <label>I accept all privacy policy & rules.</label>
          <input
            type="checkbox"
            name="check"
            value={data.check}
            onChange={Handler}
            onBlur={Focused}
          />

          {error.check && active.check && <span>{error.check}</span>}

          <button type="submit">Sign Up</button>
          <Link to="/home/login">Login</Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
