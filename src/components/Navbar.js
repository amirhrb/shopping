import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { scrollContext } from "../contexts/ScrollProvider";

const Glass = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  background: rgba(200, 200, 200, 0.4);
  ${(props) => (props.isClicked ? "display:block" : "display:none")};
  @media (min-width: 640px) {
    display: none;
  }
`;

const Nav = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 3;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 640px) {
    ${(props) =>
      props.isScrolled
        ? "background-color:rgba(0,0,0,1)"
        : "background-color:rgba(45, 212, 191,0.8)"}
  }
`;
const Ul = styled.ul`
  @media (min-width: 640px) {
    width: 100%;
    height: 60px;
    top: 0;
    padding: 0 5px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
    box-shadow: none;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
    font-size: large;
    div {
      width: 75%;
      max-width: 640px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
    a {
      ${(props) =>
        props.isScrolled ? "color:#2DD4BF" : "color:rgb(250,250,250)"}
    }
  }
  @media (max-width: 640px) {
    a:nth-child(1) {
      margin-top: 80px;
    }
    a {
      color: #fff;
      margin-bottom: 5px;
    }
    height: 100vh;
    width: 85px;
    bottom: 0;
    margin: 0;
    padding: 0 5px;
    background: #2dd4bf;
    box-shadow: 0.5px 0 1px #2dd4bf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    z-index: 5;
    transition: left 0.2s;
    top: 0;
    div {
      display: flex;
      flex-direction: column;
      /* align-items: center;
        justify-content: space-around; */
    }
  }
  ${(props) => (props.isClicked ? "left:0" : "left:-100%")}
`;

const Burger = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
    margin: 0 35px;
    height: 15px;
    z-index: 6;
    div {
      border-radius: 5px;
      transform-origin: 4px;
      width: 1.75rem;
      height: 0.25rem;
      margin-bottom: 3px;
    }
    div:nth-child(1) {
      transform: ${(props) => (props.isClicked ? "rotate(45deg)" : "")};
      background-color: ${(props) => (props.isClicked ? "#fff" : "#2DD4BF")};
    }
    div:nth-child(2) {
      transform: ${(props) => (props.isClicked ? "translate(-20px,0)" : "")};
      background-color: ${(props) => (props.isClicked ? "#fff" : "#2DD4BF")};
      filter: ${(props) => (props.isClicked ? "opacity(0)" : "")};
    }
    div:nth-child(3) {
      transform: ${(props) => (props.isClicked ? "rotate(-45deg)" : "")};
      background-color: ${(props) => (props.isClicked ? "#fff" : "#2DD4BF")};
    }
  }
`;

const Navbar = (props) => {
  const isScrolled = useContext(scrollContext);

  const [isClicked, setClick] = useState(false);

  const Handler = () => {
    if (document.querySelector("body").scrollWidth < 640) {
      setClick(!isClicked);
    }
  };
  return (
    <Nav isClicked={isClicked} isScrolled={isScrolled}>
      <Burger onClick={Handler} isClicked={isClicked}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
      <Ul isClicked={isClicked} isScrolled={isScrolled}>
        <div>
          <Link to="/" onClick={Handler}>
            Home
          </Link>
          <Link to="/store" onClick={Handler}>
            Store
          </Link>
          <Link to="/info" onClick={Handler}>
            Info
          </Link>
        </div>
      </Ul>

      <Glass isClicked={isClicked} onClick={Handler} />
    </Nav>
  );
};

export default Navbar;
