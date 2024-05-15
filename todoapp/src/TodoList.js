import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoItem = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const deleteTodoItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodoItem}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleTodo(index)}
              />
              <span
                style={{
                  marginRight: "20px",
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </div>
            <button
              style={{ marginTop: "15px", marginBottom: "15px" }}
              onClick={() => deleteTodoItem(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;