import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//contexts
import { ProductContext } from "../../contexts/ProductProvider";

//styles
import styles from "../styles/Details.module.css";

//image
import NotFoundImg from "../../images/page-not-found.png";

//componnts
import { BuyBox } from "./BuyBox";
import { scrollContext } from "../../contexts/ScrollProvider";

const Div = styled.div`
  min-height: calc(90vh + 60px);
  box-sizing: content-box;
  @media (min-width: 640px) {
    padding: 100px 100px 40px 100px;
  }
  /* ${(props) => (props.checkedItem ? "" : "text-align:center;")} */
  padding: 70px 10px 40px 10px;

  a {
    background-color: aqua;
    color: #fff;
    font-size: large;
    width: 110px;
    height: 30px;
    padding: 2px;
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: ${({ isScrolled }) => (isScrolled ? "15px" : "-95px")};
    @media (min-width: 640px) {
      bottom: ${({ isScrolled }) => (isScrolled ? "25px" : "-95px")};
    }
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    &:hover &:active {
    }
  }
`;

const Details = (props) => {
  const [checkedItem, setItem] = useState(null);

  const data = useContext(ProductContext);

  const isScrolled = useContext(scrollContext);
  const id = Number(props.match.params.id);

  useEffect(() => {
    if (data.length) {
      if (data.some((item) => item.id === id))
        setItem(data.find((item) => item.id === id));
    }
  }, [checkedItem, data, id]);

  return (
    <Div checkedItem={checkedItem} isScrolled={isScrolled}>
      {checkedItem ? (
        <>
          <img
            src={checkedItem.image}
            alt="detail img"
            className={styles.image}
          />
          <h3>{checkedItem.title}</h3>
          <br />
          <p>{checkedItem.description}</p>
          <br />
          <BuyBox data={checkedItem} label={true} />
          <br />
          <Link to="/store">back to store</Link>
        </>
      ) : (
        <img src={NotFoundImg} alt="not found!" style={{ width: "250px" }} />
      )}
    </Div>
  );
};

export default Details;
