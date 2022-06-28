const ADDTODO = "todos/ADDTODO";
const TOGGLE = "todos/TOGGLE";

const initialState = [];

export const addTodo = (text) => ({ type: ADDTODO, text });
export const toggleTodo = (id) => ({ type: TOGGLE, id });
let nextId = 0;

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return [
        ...state,
        {
          id: nextId++,
          text: action.text,
          done: false,
        },
      ];
    case TOGGLE:
      return state.map((todo) => {
        return todo.id === action.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo;
      });
    default:
      return state;
  }
};

export default todos;
