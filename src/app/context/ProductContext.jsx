"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDataList, setProductDataList] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const response = await res.json();
      setProductDataList(response);
    };
    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productDataList,
        setProductDataList,
        isFilterVisible,
        setIsFilterVisible,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
