import styles from './TodoItem.module.css';

function TodoItem({ finished, summary, priority }) {
  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        defaultChecked={finished}
      />
      <p className={styles.summary}>{summary}</p>
      <span className={styles[priority]} />
    </div>
  );
}

export default TodoItem;
