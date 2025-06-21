"use client";

import styles from "./ProductHeader.module.css";
import { useProductContext } from "../../context/ProductContext";


export default function ProductHeader({ totalItems }) {
    const { isFilterVisible, setIsFilterVisible } = useProductContext();
  
  return (
    <div className={styles.header}>
      <div className={styles.border}>
        <div className={styles.left}>
          <p className={styles.total}>{totalItems} Items</p>
          <button className={styles.filterButtonDesktop} onClick={() => setIsFilterVisible(prev => !prev)}>{isFilterVisible ? "Hide" : "Show"} Filter</button>
          <button className={styles.filterButtonMobile}>Filter</button>
        </div>

        {/* Vertical line visible only on mobile */}
        <div className={styles.mobileDivider}></div>

        <div className={styles.right}>
          <label htmlFor="sort" className={styles.sortLabel}>
            Recommended
          </label>
        </div>
      </div>
    </div>
  );
}
