import React, { memo, useState } from "react";

const TodoItem = memo(function Todos({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggle(todo.id)}>
      {todo.text}
    </li>
  );
});

const TodoList = memo(function Todolist({ todos, onToggle }) {
  return (
    <ul>
      {console.log(todos)}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={text}
          placeholder='할 일을 입력하세요.'
          onChange={onChange}
        />
        <button>등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
