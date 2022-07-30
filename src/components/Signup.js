import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./styles/Signup.module.css";

import { validate } from "../helper/functions";

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
    <div className={styles.cont}>
      <form className={styles.form} onSubmit={SignUp}>
        <h1>Sign Up</h1>
        <br />
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={Handler}
          onBlur={Focused}
        />
        {error.name && active.name && <span>{error.name}</span>}
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={Handler}
          onBlur={Focused}
        />
        {error.email && active.email && <span>{error.email}</span>}
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={Handler}
          onBlur={Focused}
        />
        {error.password && active.password && <span>{error.password}</span>}
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm"
          value={data.confirm}
          onChange={Handler}
          onBlur={Focused}
        />
        {error.confirm && active.confirm && <span>{error.confirm}</span>}
        <br />
        <label>I accept all privacy policy & rules.</label>
        <div style={{ position: "relative" }}>
          <input
            type="checkbox"
            name="check"
            value={data.check}
            onChange={Handler}
            onBlur={Focused}
          />
        </div>
        {error.check && active.check && <span>{error.check}</span>}
        <br />
        <br />
        <button type="submit">Sign Up</button>
        <Link to="/home/login">Login</Link>
      </form>
    </div>
  );
};

export default Signup;
