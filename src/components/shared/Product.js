import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//contexts
import { CartContext } from "../../contexts/CartProvider";

//function
import { shortner, isInCart, checkCount } from "../../helper/functions";

//styles
import styles from "../styles/Product.module.css";

//icons
// import store from '../../assets/icons/store.svg'
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import priceTag from "../../assets/icons/price-tag.svg";
import trash from "../../assets/icons/trash-can-solid.svg";
import { BuyBox } from "./BuyBox";

const Sizer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  overflow: hidden;
`;

const Product = ({ data }) => {
  return (
    <div className={styles.mainDiv}>
      <Link to={`/store/details/${data.id}`}>
        <h4>{shortner(data.title)}</h4>
        <Sizer>
          <img src={data.image} alt="product-pic" />
        </Sizer>
      </Link>

      <div>
        <p>
          <Link to={`/store/details/${data.id}`}>
            <span>Category: {data.category}</span>
          </Link>
        </p>
        <br />
        <BuyBox data={data} label={true} />
      </div>
    </div>
  );
};

export default Product;
