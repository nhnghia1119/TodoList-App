import React, { useState } from "react";

import { Button, InputGroup, InputGroupAddon } from "reactstrap";
import TodoForm from "./TodoForm";

import "./todoItem.scss";

const TodoItem = (todo) => {
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
        <InputGroup>
          <InputGroupAddon
            className="item"
            addonType="prepend"
            onDoubleClick={() =>
              setEdit({ id: todo.todo.id, value: todo.todo.content })
            }
          >
            {todo.todo.content}
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button onClick={() => todo.ChangeStatusTodo(todo.todo.id)}>
              {todo.todo.status == true ? (
                <span>Done</span>
              ) : (
                <span>UnDone</span>
              )}
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button
              onClick={() => todo.removeHandler(todo.todo.id, todo.activeTab)}
            >
              Delete
            </Button>
          </InputGroupAddon>
        </InputGroup>
      ) : todo.activeTab == "1" ? (
        <InputGroup>
          <InputGroupAddon
            className="item"
            addonType="prepend"
            onDoubleClick={() =>
              setEdit({ id: todo.todo.id, value: todo.todo.content.content })
            }
          >
            {todo.todo.content.content}
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button onClick={() => todo.ChangeStatusTodo(todo.todo.id)}>
              {todo.todo.status == true ? (
                <span>Done</span>
              ) : (
                <span>UnDone</span>
              )}
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button
              onClick={() => todo.removeHandler(todo.todo.id, todo.activeTab)}
            >
              Delete
            </Button>
          </InputGroupAddon>
        </InputGroup>
      ) : todo.activeTab == "2" && todo.todo.status === false ? (
        <InputGroup>
          <InputGroupAddon
            className="item"
            addonType="prepend"
            onDoubleClick={() =>
              setEdit({ id: todo.todo.id, value: todo.todo.content.content })
            }
          >
            {todo.todo.content.content}
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button onClick={() => todo.ChangeStatusTodo(todo.todo.id)}>
              {todo.todo.status == true ? (
                <span>Done</span>
              ) : (
                <span>UnDone</span>
              )}
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button
              onClick={() => todo.removeHandler(todo.todo.id, todo.activeTab)}
            >
              Delete
            </Button>
          </InputGroupAddon>
        </InputGroup>
      ) : todo.activeTab == "3" && todo.todo.status === true ? (
        <InputGroup>
          <InputGroupAddon
            className="item"
            addonType="prepend"
            onDoubleClick={() =>
              setEdit({ id: todo.todo.id, value: todo.todo.content.content })
            }
          >
            {todo.todo.content.content}
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button onClick={() => todo.ChangeStatusTodo(todo.todo.id)}>
              {todo.todo.status == true ? (
                <span>Done</span>
              ) : (
                <span>UnDone</span>
              )}
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button
              onClick={() => todo.removeHandler(todo.todo.id, todo.activeTab)}
            >
              Delete
            </Button>
          </InputGroupAddon>
        </InputGroup>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoItem;
