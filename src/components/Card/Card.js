import styles from './Card.module.css';

export default function Card({ name }) {
  return <li className={styles.bookItem}>{name}</li>;
}
