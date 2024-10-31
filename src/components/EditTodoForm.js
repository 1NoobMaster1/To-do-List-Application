import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    console.log(editTodo);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        placeholder="Update Task!"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo-btn" placeholder="Update Task!" type="submit">
        Update Task!
      </button>
    </form>
  );
};
