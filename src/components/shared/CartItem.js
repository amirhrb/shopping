import React from "react";
import { Link } from "react-router-dom";

//function
import { shortner } from "../../helper/functions";

//styles
import styles from "../styles/CartItem.module.css";

import { BuyBox } from "./BuyBox";

const CartItem = ({ data }) => {
  return (
    <div className={styles.itemDiv}>
      <Link to={`/store/details/${data.id}`}>
        <img src={data.image} alt="product-pic" className={styles.itemImage} />
      </Link>
      <div className={styles.title}>
        <h4>{shortner(data.title)}</h4>
        <span>${data.price}</span>
      </div>
      <BuyBox data={data} />
    </div>
  );
};

export default CartItem;
