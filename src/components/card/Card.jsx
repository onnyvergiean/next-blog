import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>15.02.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consecteture adipisicing elit</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          voluptatibus, quod, sapiente, quidem, doloribus dolorum quos
          repudiandae autem quae quia officiis. Quisquam voluptatibus, quod,
          sapiente, quidem, doloribus dolorum quos repudiandae autem quae quia
          officiis.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
