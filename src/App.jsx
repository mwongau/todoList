import {React,  useState } from 'react';

export default function Todos() {
  const [todoList, setTodoList] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
      setTodoList([...todoList, newItem]);
      setNewItem('');
  };

  const deleteItem = (index) => {
    setTodoList(todoList.filter((val, i) => i !== index));
  };
  
  function handleChange(e) {
    setNewItem(e.target.value);
  };
  
  const items = todoList.map((item, index) =>
    <li key={index}>
      {item} <button onClick={() => deleteItem(index)}>Delete</button>
    </li>
  );

  return (
    <div>
      <input type="text" value={newItem} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
      <ul>{items}</ul>
    </div>
  );
}
