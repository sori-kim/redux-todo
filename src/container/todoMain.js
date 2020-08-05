import React, { useRef, useState } from "react";
import { addTodo, editTodo, removeTodo } from "../todo/state";

import TodoList from "../component/todoList";
import { connect } from "react-redux";

function TodoMain(props) {
  const { addTodo, removeTodo, editTodo, todos } = props;
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const onChangeInput = () => {
    setInput(inputRef.current.value);
  };

  const onClickHandler = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="할 일"
        ref={inputRef}
        onChange={onChangeInput}
        value={input}
      ></input>
      <button onClick={onClickHandler}> 추가하기 </button>
      <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    editTodo: (todo) => dispatch(editTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain);
