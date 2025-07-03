import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles/main.scss';

export default function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">TODO з Redux-Saga</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}
