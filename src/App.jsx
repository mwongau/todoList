import { useState } from 'react';
//import './App.css'

export default function Todos() {
  const [todoList, setTodoList] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
      setTodoList([...todoList, newItem]);
      setNewItem('');
  };

  const deleteItem = (index) => {
    setTodoList(todoList.filter((value, i) => i !== index));
  };
  
  function handleChange(e) {
    setNewItem(e.target.value);
  };
  
  const items = todoList.map((value, index) =>
    <li key={index}>
      {value} <button className="mybutton" onClick={() => deleteItem(index)}>Delete</button>
    </li>
  );

  return (
    <div>
      <input value={newItem} onChange={handleChange} />
      <button className="mybutton" onClick={addItem}>Add</button>
      <ul>{items}</ul>
    </div>
  );
}