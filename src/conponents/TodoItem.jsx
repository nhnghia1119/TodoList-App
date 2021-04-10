import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoForm from "./TodoForm";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import classnames from "classnames";
import "./todoItem.scss";

const TodoItem = (todo) => {
  console.log("🚀 ---------------------------------------------");
  console.log("🚀 ~ file: TodoItem.jsx ~ line 10 ~ todo", todo);
  console.log("🚀 ---------------------------------------------");
  const [edit, setEdit] = useState({ id: null, value: "" });
  const submitUpdate = (value) => {
    todo.EditHandler(edit.id, value, todo.todo.status);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>;
  }
  return (
    <div className="todoItem">
      {todo.activeTab == "4" ? (
        <div className="todoItem__child">
          <div
            className="todoItem__child__content"
            onDoubleClick={() =>
              setEdit({ id: todo.todo.id, value: todo.todo.content })
            }
          >
            <div
              className={classnames({
                completed_content: todo.todo.status == false,
              })}
            >
              {todo.todo.content}
            </div>
          </div>

          <div className="todoItem__child__icon">
            <IoCheckmarkDoneOutline
              onClick={() => todo.ChangeStatusTodo(todo.todo.id)}
              className={classnames({
                completed__button: todo.todo.status == false,
              })}
            ></IoCheckmarkDoneOutline>
            <MdDelete
              onClick={() => todo.removeHandler(todo.todo.id, todo.activeTab)}
            ></MdDelete>
          </div>
        </div>
      ) : todo.activeTab == "1" ? (
        <div className="todoItem__child">
          <div
            className="todoItem__child__content"
            onDoubleClick={() =>
              setEdit({ id: todo.todo.id, value: todo.todo.content.content })
            }
          >
            <div
              className={classnames({
                completed__content: todo.todo.status == false,
              })}
            >
              {todo.todo.content.content}
            </div>
          </div>

          <div className="todoItem__child__icon">
            <IoCheckmarkDoneOutline
              onClick={() => todo.ChangeStatusTodo(todo.todo.id)}
              className={classnames({
                completed__button: todo.todo.status == false,
              })}
            ></IoCheckmarkDoneOutline>
            <MdDelete
              onClick={() => todo.removeHandler(todo.todo.id, todo.activeTab)}
            ></MdDelete>
          </div>
        </div>
      ) : todo.activeTab == "2" && todo.todo.status === false ? (
        <div className="todoItem__child">
          <div
            className="todoItem__child__content"
            onDoubleClick={() =>
              setEdit({ id: todo.todo.id, value: todo.todo.content.content })
            }
          >
            <div
              className={classnames({
                completed_content: todo.todo.status == false,
              })}
            >
              {todo.todo.content.content}
            </div>
          </div>

          <div className="todoItem__child__icon">
            <IoCheckmarkDoneOutline
              onClick={() => todo.ChangeStatusTodo(todo.todo.id)}
              className={classnames({
                completed__button: todo.todo.status == false,
              })}
            ></IoCheckmarkDoneOutline>
            <MdDelete
              onClick={() => todo.removeHandler(todo.todo.id, todo.activeTab)}
            ></MdDelete>
          </div>
        </div>
      ) : todo.activeTab == "3" && todo.todo.status === true ? (
        <div className="todoItem__child">
          <div
            className="todoItem__child__content"
            onDoubleClick={() =>
              setEdit({ id: todo.todo.id, value: todo.todo.content.content })
            }
          >
            <div
              className={classnames({
                completed_content: todo.todo.status == false,
              })}
            >
              {todo.todo.content.content}
            </div>
          </div>

          <div className="todoItem__child__icon">
            <IoCheckmarkDoneOutline
              onClick={() => todo.ChangeStatusTodo(todo.todo.id)}
              className={classnames({
                completed__button: todo.todo.status == false,
              })}
            ></IoCheckmarkDoneOutline>
            <MdDelete
              onClick={() => todo.removeHandler(todo.todo.id, todo.activeTab)}
            ></MdDelete>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoItem;
