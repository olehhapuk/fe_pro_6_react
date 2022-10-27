function TodoItem({ finished, summary, priority }) {
  return (
    <div>
      <input type="checkbox" defaultChecked={finished} />
      <p>{summary}</p>
      <span />
    </div>
  );
}

export default TodoItem;
