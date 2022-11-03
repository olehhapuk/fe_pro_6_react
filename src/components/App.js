import Layout from './Layout/Layout';
import TodoEditor from './TodoEditor/TodoEditor';
import TodoList from './TodoList/TodoList';

const todos = [
  {
    id: 'id-1',
    summary: 'Написати реакт проект',
    priority: 'medium',
    finished: false,
  },
  {
    id: 'id-2',
    summary: 'Виконати домашку',
    priority: 'high',
    finished: true,
  },
  {
    id: 'id-3',
    summary: 'Пограти в ігри',
    priority: 'low',
    finished: false,
  },
];

function App() {
  return (
    <Layout>
      <TodoEditor />
      <TodoList todos={todos} />
    </Layout>
  );
}

export default App;
