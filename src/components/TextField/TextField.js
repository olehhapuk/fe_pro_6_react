import styles from './TextField.module.css';

function TextField({ placeholder }) {
  return (
    <input
      type="text"
      autoComplete="off"
      placeholder={placeholder}
      className={styles.input}
    />
  );
}

export default TextField;
