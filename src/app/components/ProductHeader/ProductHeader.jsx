"use client";

import styles from "./ProductHeader.module.css";
import { useProductContext } from "../../context/ProductContext";
import { useState } from "react";

export default function ProductHeader() {
  const { productDataList, isFilterVisible, setIsFilterVisible, setSortType } =
    useProductContext();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSort = (type) => {
    setSortType(type);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.border}>
        <div className={styles.left}>
          <p className={styles.total}>{productDataList.length} Items</p>
          <button
            className={styles.filterButtonDesktop}
            onClick={() => setIsFilterVisible((prev) => !prev)}
          >
            {isFilterVisible ? "Hide" : "Show"} Filter
          </button>
          <button className={styles.filterButtonMobile}>Filter</button>
        </div>

        {/* Vertical line visible only on mobile */}
        <div className={styles.mobileDivider}></div>

        <div className={styles.right}>
          <div className={styles.dropdownWrapper}>
            <div
              className={styles.sortLabel}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              Recommended ▾
            </div>
            {dropdownOpen && (
              <ul className={styles.dropdown}>
                <li onClick={() => handleSort("recommended")}>Recommended</li>
                <li onClick={() => handleSort("titleAZ")}>Newest First</li>
                <li onClick={() => handleSort("titleZA")}>Popular</li>
                <li onClick={() => handleSort("priceLowToHigh")}>Price: Low to High</li>
                <li onClick={() => handleSort("priceHighToLow")}>Price: High to Low</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
