'use client';

import styles from './Navbar.module.css';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        {/* Hamburger icon for mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Image src="/icons/hamburger-menu.svg" alt="Menu" width={20} height={20} />
        </button>

        <Image
          src="/icons/Logo.svg"
          alt="Company Icon"
          width={36}
          height={36}
          className={clsx(styles.companyIcon, styles.icon)}
        />
      </div>

      <div className={styles.center}>
        <span className={styles.companyName}>LOGO</span>
      </div>

      <div className={styles.right}>
        <Image src="/icons/search-normal.svg" alt="Search" width={24} height={24} className={styles.icon} />
        <Image src="/icons/heart.svg" alt="Favourites" width={24} height={24} className={styles.icon} />
        <Image src="/icons/shopping-bag.svg" alt="Cart" width={24} height={24} className={styles.icon} />

        <div className={styles.profileIcon}>
            <Image src="/icons/profile.svg" alt="Profile" width={24} height={24} className={styles.icon} />
        </div>
        
        {/* Language dropdown only on large screens */}
        <div className={styles.languageDropdown}>
             <p className={styles.languageText}>ENG</p>  
        </div>
      </div>
    </header>
  );
}
