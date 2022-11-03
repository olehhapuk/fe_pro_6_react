import TextField from '../TextField/TextField';
import Select from '../Select/Select';
import Button from '../Button/Button';
import styles from './TodoEditor.module.css';

function TodoEditor() {
  return (
    <div className={styles.form}>
      <div className={styles.inputs}>
        <TextField placeholder="Summary" />
        <Select />
      </div>
      <Button>Створити завдання</Button>
    </div>
  );
}

export default TodoEditor;
