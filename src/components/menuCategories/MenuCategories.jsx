import Link from 'next/link';
import styles from './menuCategories.module.css';

export default function MenuCategories() {
  return (
    <div className={styles.categoryList}>
      <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
        style
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.fashion}`}>
        fashion
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.food}`}>
        food
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.travel}`}>
        travel
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.culture}`}>
        culture
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.coding}`}>
        coding
      </Link>
    </div>
  );
}
