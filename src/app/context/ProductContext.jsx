"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDataList, setProductDataList] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [filterCategories, setFilterCategories] = useState([]);
  const [selectedFilters, setselectedFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const response = await res.json();
        setProductDataList(response);
        const categorySet = new Set(response.map((item) => item.category));
        setFilterCategories(Array.from(categorySet));
      } catch (error) {
        console.log("Error", error);
      }
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
        filterCategories,
        setFilterCategories,
        selectedFilters,
        setselectedFilters,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
