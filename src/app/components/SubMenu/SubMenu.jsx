"use client";

import styles from "./SubMenu.module.css";

const categories = ["Shop", "Skills", "Stories", "About", "Contact Us"];

export default function SubMenu({ current, active }) {
  return (
    <nav className={styles.submenu}>
      <ul className={styles.desktopMenu}>
        {categories.map((item) => (
          <li key={item} className={styles.menuItem}>
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.mobileMenu}>
        <span className={styles.current}>{current}</span>
        <span className={styles.separator}>|</span>
        <span className={styles.active}>{active}</span>
      </div>
    </nav>
  );
}
