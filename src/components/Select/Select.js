import styles from './Select.module.css';

function Select() {
  return (
    <select className={styles.input}>
      <option>Низький пріоритет</option>
      <option>Середній пріоритет</option>
      <option>Високий пріоритет</option>
    </select>
  );
}

export default Select;
