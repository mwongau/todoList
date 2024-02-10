import {React,  useState } from 'react';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setTodoList([...todoList, newItem]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (index) => {
    setTodoList(todoList.filter((val, i) => i !== index));
  };

  return (
    <div>
      <input type="text" value={newItem} 
	   onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item} 
			<button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
