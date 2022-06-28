import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Todos from "../component/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodoContainer() {
  const todos = useSelector(
    (state) => console.log(state) || state.todos,
    shallowEqual
  );
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id), [dispatch]));

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodoContainer;
