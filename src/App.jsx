import {React,  useState } from 'react';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
      setTodoList([...todoList, newItem]);
      setNewItem('');
  };

  const deleteItem = (index) => {
    setTodoList(todoList.filter((val, i) => i !== index));
  };

  return (
    <div>
      <input type="text" value={newItem} 
	   onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
