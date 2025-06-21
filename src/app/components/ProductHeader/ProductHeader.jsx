import styles from "./ProductHeader.module.css";

export default function ProductHeader({ totalItems }) {
  return (
    <div className={styles.header}>
      <div className={styles.border}>
        <div className={styles.left}>
          <p className={styles.total}>{totalItems} Items</p>
          <button className={styles.filterButtonDesktop}>Show Filter</button>
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
