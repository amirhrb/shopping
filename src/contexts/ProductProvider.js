import React, { useEffect, useState, createContext } from "react";

//API
import { getData } from "../services/Api";

export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setData(await getData());
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
