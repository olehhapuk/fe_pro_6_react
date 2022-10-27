import TextField from '../TextField/TextField';
import Select from '../Select/Select';
import Button from '../Button/Button';

function TodoEditor() {
  return (
    <div>
      <TextField placeholder="Summary" />
      <Select />
      <Button>Створити завдання</Button>
    </div>
  );
}

export default TodoEditor;
