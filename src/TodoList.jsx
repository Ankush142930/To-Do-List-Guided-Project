import TodoItem from './TodoItem';

/* eslint-disable react/prop-types */
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && 'NO To-dos as of now!'}
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            {...item}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};
export default TodoList;
