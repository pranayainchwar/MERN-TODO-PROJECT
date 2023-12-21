import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addNewTodo from "../redux/actions/index.js"

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
  };
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <form action="text" className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Type...."
        className="input"
        onChange={onInputChange}
      />
    </form>
  );
};

export default TodoForm;
