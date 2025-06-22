"use client";

import styles from "./ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard"; // assumes you’ve created this
import { useProductContext } from "../../context/ProductContext";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

export default function ProductList() {
  const {
    productDataList,
    isFilterVisible,
    filterCategories,
    selectedFilters,
    setselectedFilters,
    filteredProducts,
    setFilteredProducts,
    loading,
  } = useProductContext();
  const data = useProductContext();

  useEffect(() => {
    const filteredValue =
      selectedFilters.length === 0
        ? []
        : productDataList.filter((product) =>
            selectedFilters.includes(product.category)
          );

    setFilteredProducts(filteredValue);
  }, [selectedFilters]);

  const filterCheckBoxes = (e) => {
    const { value, checked } = e.target;

    if (checked) setselectedFilters((prev) => [...prev, value]);
    else setselectedFilters((prev) => prev.filter((item) => item !== value));
  };

  console.log("ContextObject", data);

  return (
    <section className={styles.productListWrapper}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          {/* Filter section */}
          {isFilterVisible && (
            <aside className={styles.filterSection}>
              <h2>Filters</h2>
              <ul>
                {filterCategories?.map((category, index) => {
                  return (
                    <li key={index}>
                      <label>
                        <input
                          type="checkbox"
                          value={category}
                          onChange={filterCheckBoxes}
                          checked={selectedFilters.includes(category)}
                        />
                        {category}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </aside>
          )}

          {/* Product grid */}
          <div className={styles.productGrid}>
            {(filteredProducts?.length > 0
              ? filteredProducts
              : productDataList
            )?.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
