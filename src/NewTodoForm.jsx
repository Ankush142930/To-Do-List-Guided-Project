import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const NewTodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === '') return;
    // eslint-disable-next-line react/prop-types
    addTodo(newItem);

    setNewItem('');
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};
export default NewTodoForm;
