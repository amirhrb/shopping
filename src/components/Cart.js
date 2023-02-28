import React, { useContext } from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./styles/Cart.module.css";

//contexts
import { CartContext } from "../contexts/CartProvider";

//function
// import { shortner } from '../helper/functions';

//components
import CartItem from "./shared/CartItem";

//icons
// import store from '../assets/icons/store.svg'
import back from "../assets/icons/back.svg";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <Link to="/store">
        <img src={back} alt="bag" className={styles.backBtn} />
      </Link>

      <div className={styles.itemsDiv}>
        {state.inCartItems.length ? (
          state.inCartItems.map((item) => (
            <CartItem data={item} key={item.id} />
          ))
        ) : (
          <div className={styles.emptyDiv}>
            <h3>CART IS EMPTY</h3>
            <Link to="/store">go to shop</Link>
          </div>
        )}
      </div>
      <div className={styles.counter}>
        {state.inCartItems.length ? (
          <div>
            <p>Items: {state.countItems}</p>
            <p>Total price: {state.total.toFixed(2)}$</p>
            <button
              onClick={() => dispatch({ type: "CLEAR_ALL" })}
              className={styles.clearBtn}
            >
              Clear
            </button>
            <button
              onClick={() => dispatch({ type: "PAYMENT" })}
              className={styles.payBtn}
            >
              pay
            </button>
          </div>
        ) : (
          <p>buy first!</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
