import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        placeholder="What is the task for today?"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};
