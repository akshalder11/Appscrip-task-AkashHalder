"use client";

import styles from "./ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard"; // assumes you’ve created this
import { useProductContext } from "../../context/ProductContext";

export default function ProductList() {
  const {
    productDataList,
    setProductDataList,
    isFilterVisible,
    filterCategories,
  } = useProductContext();
  const data = useProductContext();

  console.log("ContextObject", data);

  return (
    <section className={styles.productListWrapper}>
      <div className={styles.container}>
        {/* Filter section */}
        {isFilterVisible && (
          <aside className={styles.filterSection}>
            <h3>Filters</h3>
            <ul>
              {filterCategories?.map((category, index) => {
                return (
                  <li key={index}>
                    <input type="checkbox" value={category} /> {category}
                  </li>
                );
              })}
            </ul>
          </aside>
        )}

        {/* Product grid */}
        <div className={styles.productGrid}>
          {productDataList?.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
