import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
// import { ProductContext } from "../../contexts/ProductProvider";
import { checkCount, isInCart } from "../../helper/functions";

import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import priceTag from "../../assets/icons/price-tag.svg";
import trash from "../../assets/icons/trash-can-solid.svg";

import styles from "../styles/BuyBox.module.css";

export const BuyBox = ({ data, label }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <>
      <div className={styles.buyBox}>
        {label ? (
          <span>
            {data.price} <img src={priceTag} alt="$" />
          </span>
        ) : (
          ""
        )}
        {isInCart(state, data.id) ? (
          <div>
            <button
              onClick={() => dispatch({ type: "INCREASE", payload: data })}
            >
              <img src={plus} alt="plus" />
            </button>
            <span>{checkCount(state, data.id)}</span>
            {checkCount(state, data.id) === 1 ? (
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
                className={styles.trashBtn}
              >
                <img src={trash} alt="trash" className={styles.trash} />
              </button>
            ) : (
              <button
                onClick={() => dispatch({ type: "DECREASE", payload: data })}
                className={styles.minusBtn}
              >
                <img src={minus} alt="minus" />
              </button>
            )}
          </div>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}
            className={styles.buyBtn}
          >
            Buy
          </button>
        )}
      </div>
    </>
  );
};
