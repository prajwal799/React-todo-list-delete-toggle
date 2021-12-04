import React, { useState } from "react";

function TodoInput({ onSubmit }) {
  const [text, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit && onSubmit(text);
    setTodo("");
  };
  return (
    <div>
      <input placeholder="add something" onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default TodoInput;
