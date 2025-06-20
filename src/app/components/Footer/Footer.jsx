import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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

          <div className={styles.contact}>
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>

            <h3 className={styles.currencyHead}>CURRENCY</h3>
            <div className={styles.currency}>
              <Image src="/icons/USA.svg" alt="USD" width={24} height={24} />
              <span className={styles.currentFormat}>USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </p>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
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
          </div>

          <div className={styles.bottomRight}>
            <h4>FOLLOW US</h4>
            <div className={styles.socialIcons}>
              <Image src="/icons/insta.svg" alt="Instagram" width={32} height={32} />
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </div>

            <h4 className={styles.paymentsHead}>mettā muse ACCEPTS</h4>
            <div className={styles.payments}>
              <Image src="/icons/Gpay.svg" alt="GPay" width={56} height={35} />
              <Image src="/icons/MasterCard.svg" alt="MasterCard" width={56} height={35} />
              <Image src="/icons/PayPal.svg" alt="Paypal" width={56} height={35} />
              <Image src="/icons/Amex.svg" alt="Amex" width={56} height={35} />
              <Image src="/icons/ApplePay.svg" alt="Apple Pay" width={56} height={35} />
              <Image src="/icons/SomethingPay.svg" alt="Something Pay" width={56} height={35} />
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
