import { useState } from "react";

function TodoInput({ onSubmit }) {
  const [todo, setTodo] = useState();
  function handleChange(e) {
    setTodo(e.target.value);
  }
  const handleSubmit = () => {
    onSubmit && onSubmit(todo);
    setTodo("");
  };
  return (
    <div className="TodoInput">
      <input
        style={{ marginTop: "10px", marginBottom: "5px", width: "200px" }}
        placeholder="Enter Title"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
export default TodoInput;
