import styles from "./ProductCard.module.css";
import Image from "next/image";

export default function ProductCard({ image, title, price }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <img src={image} alt="Product" className={styles.productImage} />
      </div>

      <div className={styles.productDetails}>
        <div className="detailsText">
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.price}>${price}</p>
        </div>
        <div className="favouriteIcon">
          <Image
            src="/icons/heart.svg"
            alt="Favourites"
            width={24}
            height={24}
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
}
