import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
  const todos = useSelector(state => state.todo.todos); 
  console.log(todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos && todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>delte</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
