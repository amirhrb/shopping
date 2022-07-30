import React, { useReducer, createContext } from "react";

export const CartContext = createContext();

const initialValue = {
  inCartItems: [],
  countItems: 0,
  total: 0,
  payed: false,
};

//this fn gets the data from "add item" action and sum the total price
const sumItem = (cartItems) => {
  const countItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const total = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return { countItems, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.inCartItems.find((item) => item.id === action.payload.id)) {
        state.inCartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        inCartItems: [...state.inCartItems],
        ...sumItem(state.inCartItems),
      };
    case "INCREASE":
      const indexI = state.inCartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.inCartItems[indexI].quantity++;
      return {
        ...state,
        ...sumItem(state.inCartItems),
      };
    case "DECREASE":
      const indexD = state.inCartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.inCartItems[indexD].quantity--;
      return {
        ...state,
        ...sumItem(state.inCartItems),
      };
    case "REMOVE_ITEM":
      const indexR = state.inCartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.inCartItems.splice(indexR, 1);
      return {
        ...state,
        inCartItems: state.inCartItems,
        ...sumItem(state.inCartItems),
      };
    case "CLEAR_ALL":
      return {
        inCartItems: [],
        countItems: 0,
        total: 0,
        payed: false,
      };
    case "PAYMENT":
      return {
        inCartItems: [],
        countItems: 0,
        total: 0,
        payed: true,
      };
    default:
      return initialValue;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialValue);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
