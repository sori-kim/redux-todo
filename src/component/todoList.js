import React, { useState } from "react";

function TodoList(props) {
  const { todos, editTodo, removeTodo } = props;
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} data-id={todo.id}>
          <input
            type="text"
            placeholder={todo.todo}
            onChange={handleOnChange}
          />
          <button
            onClick={() => {
              editTodo({ id: todo.id, todo: input });
            }}
          >
            EDIT
          </button>
          <button onClick={() => removeTodo(todo)}>REMOVE</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
