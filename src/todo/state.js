import createReducer from "../common/createReducer";

//action.types
const ADD = "todo/ADD";
const REMOVE = "todo/REMOVE";
const EDIT = "todo/EDIT";
const DONE = "todo/DONE";

//action
export const addTodo = (todo) => ({ type: ADD, todo });
export const removeTodo = (todo) => ({ type: REMOVE, todo });
export const editTodo = (todo) => ({ type: EDIT, todo });

//initialState & reducer
const INITIAL_STATE = { todos: [] };
const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => {
    state.todos.push({ id: state.todos.length, todo: action.todo });
  },
  [REMOVE]: (state, action) => {
    state.todos.splice(
      state.todos.findIndex((todo) => todo.id === action.todo.id),
      1
    );
  },
  [EDIT]: (state, action) => {
    const index = state.todos.findIndex((todo) => todo.id === action.todo);
    if (index >= 0) {
      state.todos[index] = action.todo;
    }
  },
});

export default reducer;
