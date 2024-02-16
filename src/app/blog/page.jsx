import CardList from '@/components/cardList/CardList';
import styles from './blogPage.module.css';
import Menu from '@/components/Menu/Menu';

export default function Blog() {
  return (
    <>
      <h1 className={styles.title}>Style Page</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </>
  );
}
