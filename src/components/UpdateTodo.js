import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';

const Todos = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const [updatedText, setUpdatedText] = useState(''); // State to handle updated text

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: updatedText }));
    setUpdatedText(''); 
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos && todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <input
              type="text"
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            />
            <button onClick={() => handleUpdate(todo.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
