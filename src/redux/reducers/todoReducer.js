import * as actionTypes from "../constants/todoConstant";

export const todoReducer = (state = { todo: [] }, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      const todo_add = action.payload;
      return {
        ...state,
        todo: [...state.todo, todo_add],
      };
    case actionTypes.TODO_DELETE:
      return {
        ...state,
        todo: state.todo.filter((x) => x.id !== action.payload.id),
      };
    case actionTypes.TODO_EDIT_STATUS:
      const todo_edit = action.payload;
      const id = state.todo.find((x) => x.id === todo_edit.id);

      return {
        ...state,
        todo: state.todo.map((x) => {
          if (x.id === id.id) {
            if (x.status === true) {
              x.status = false;
            } else {
              x.status = true;
            }
            return x;
          } else {
            return x;
          }
        }),
      };
    case actionTypes.TODO_EDIT:
      const todo_uda = action.payload;
      return {
        ...state,
        todo: state.todo.map((x) => {
          if (x.id === todo_uda.id) {
            x.content.content = todo_uda.newValue.content;
            return x;
          } else {
            return x;
          }
        }),
      };
    default:
      return state;
  }
};
