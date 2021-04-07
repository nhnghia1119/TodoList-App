import * as actionTypes from "../constants/todoConstant";

export const AddTodo = (id, status, content) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.TODO_ADD,
    payload: {
      id: id,
      status: status,
      content: content,
    },
  });

  localStorage.setItem("todo", JSON.stringify(getState().todo.todo));
};

export const DeleteTodo = (id) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.TODO_DELETE,
    payload: {
      id: id,
    },
  });

  localStorage.setItem("todo", JSON.stringify(getState().todo.todo));
};
export const EditStatusTodo = (id) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.TODO_EDIT_STATUS,
    payload: {
      id: id,
    },
  });

  localStorage.setItem("todo", JSON.stringify(getState().todo.todo));
};

export const EditTodo = (id, newValue) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.TODO_EDIT,
    payload: {
      id: id,
      newValue: newValue,
    },
  });

  localStorage.setItem("todo", JSON.stringify(getState().todo.todo));
};
