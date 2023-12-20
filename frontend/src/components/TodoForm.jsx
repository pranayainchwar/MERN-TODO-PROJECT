import React, { useState } from "react";

const TodoForm = () => {
    const  [text, setText] = useState("");
  const onFormSubmit = () => {};
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
