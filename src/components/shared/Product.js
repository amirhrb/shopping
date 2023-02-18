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

const Sizer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  overflow: hidden;
`;

const Product = ({ data }) => {
  const { state, dispatch } = useContext(CartContext);

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

        <div className={styles.buyBox}>
          <span>
            {data.price} <img src={priceTag} alt="$" />
          </span>
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
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: data })
                  }
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
      </div>
    </div>
  );
};

export default Product;
