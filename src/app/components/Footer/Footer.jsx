import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.top}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div></div> {/* Empty middle column to maintain grid */}

        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h3>CURRENCY</h3>
          <div className={styles.currency}>
            <Image src="/icons/us-flag.svg" alt="USD" width={16} height={12} />
            <span>USD</span>
          </div>
          <p className={styles.currencyNote}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <div className={styles.column}>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </div>

          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.payments}>
            <Image src="/icons/gpay.svg" alt="GPay" width={32} height={24} />
            <Image src="/icons/visa.svg" alt="Visa" width={32} height={24} />
            <Image src="/icons/paypal.svg" alt="Paypal" width={32} height={24} />
            <Image src="/icons/amex.svg" alt="Amex" width={32} height={24} />
            <Image src="/icons/applepay.svg" alt="Apple Pay" width={32} height={24} />
            <Image src="/icons/otherpay.svg" alt="Other Pay" width={32} height={24} />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
