import PropTypes from 'prop-types';

import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            finished={todo.finished}
            priority={todo.priority}
            summary={todo.summary}
          />
        );
      })}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
