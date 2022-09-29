import styles from './BooksList.module.css';

function BooksList({ children }) {
  return (
    <div>
      <h2 className={styles.title}>Список Книг</h2>
      <ul className={styles.container}>{children}</ul>
    </div>
  );
}

export default BooksList;
