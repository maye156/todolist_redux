import { createStore } from 'redux';

// Acciones
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: text,
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};

// Reducer
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

// Crear el store de Redux
const store = createStore(todoReducer);

export default store;
