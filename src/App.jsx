import { useEffect, useState } from 'react';
import './style.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState(() => {
    let localValue = localStorage.getItem('ITEMS');
    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((current) => {
      return [
        ...current,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false,
        },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((curr) => {
      return curr.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }

        return item;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((curr) => {
      return curr.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <NewTodoForm addTodo={addTodo} />

      <h1 className="header">Todo List</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};
export default App;
