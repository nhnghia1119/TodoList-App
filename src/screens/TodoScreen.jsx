import classnames from "classnames";
import TodoForm from "conponents/TodoForm";
import TodoItem from "conponents/TodoItem";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTodo,
  DeleteTodo,
  EditStatusTodo,
  EditTodo,
} from "redux/actions/todoAction";
import "./TodoScreen.scss";
TodoScreen.propTypes = {};

function TodoScreen(props) {
  const [todoList, setTodoList] = useState([]);
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.todo);
  const { todo } = Todo;

  //kiem tra trung id
  const checked = (todo) => {
    var id = todo.length;
    if (id < 1) {
      return 1;
    }
    id = todo[id - 1].id + 1;
    return id;
  };
  //lay gia tri value form them vao state va store
  const HandleTodoFormSubmit = (formValue) => {
    //tao newtodo
    const newtodo = {
      id: checked(todo),
      status: true,
      ...formValue,
    };

    //add todo vao store
    dispatch(AddTodo(newtodo.id, newtodo.status, formValue));

    //cat nhat state todo
    const newTodoList = [...todoList, newtodo];
    setTodoList(newTodoList);
  };

  //removeHandler
  const removeHandler = (id, idActive) => {
    //delete store
    dispatch(DeleteTodo(id));
    //delete state
    const newtodoList = todoList.filter((x) => x.id !== id);
    //kiem tra tra ve vi tri
    if (todoList.length - 1 != 0) {
      setActiveTab("4");
    } else {
      setActiveTab("1"); //khi xoa newTodo
    }
    setTodoList(newtodoList);
  };

  ///ChangeStatusTodo
  const ChangeStatusTodo = (id) => {
    //changestatus store
    dispatch(EditStatusTodo(id));
    //changestatus state

    todoList.map((x) => {
      if (x.id == id) {
        if (x.status == true) {
          x.status = false;
        } else {
          x.status = true;
        }
      }
    });
  };
  //Edit
  const EditHandler = (id, newValue, status) => {
    //Edit store
    dispatch(EditTodo(id, newValue));
    //Edit State
    const newtodo = {
      id: id,
      status: status,
      ...newValue,
    };
    todoList.map((x) => {
      if (x.id == id) {
        x.content = newtodo.content;
      }
    });
  };

  //set active
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //set active newtodo
  //get qty Item
  const qtyItem = (status) => {
    let qty = 0;
    todo.map((x) => {
      if (x.status === status) {
        qty++;
      }
    });
    return qty;
  };
  return (
    <div className="todolist" id="todolist">
      <h2 className="todolist__title">To Do List</h2>
      <div className="todolist__active">
        <li
          className={classnames({ activescreen: activeTab == "1" })}
          onClick={() => {
            toggle("1");
          }}
        >
          All <span>{activeTab === "1" ? todo.length : ""}</span>
        </li>
        <li
          className={classnames({ activescreen: activeTab == "2" })}
          onClick={() => {
            toggle("2");
          }}
        >
          Done <span>{activeTab === "2" ? qtyItem(false) : ""}</span>
        </li>
        <li
          className={classnames({ activescreen: activeTab == "3" })}
          onClick={() => {
            toggle("3");
          }}
        >
          Undone <span>{activeTab === "3" ? qtyItem(true) : ""}</span>
        </li>
        <li
          className={classnames({ activescreen: activeTab == "4" })}
          onClick={() => {
            toggle("4");
          }}
        >
          News <span>{activeTab === "4" ? todoList.length : ""}</span>
        </li>
      </div>
      <div className="todolist__input">
        <TodoForm onSubmit={HandleTodoFormSubmit}></TodoForm>
      </div>
      <div className="todolist__item">
        {activeTab == "4"
          ? todoList.map((x) => (
              <TodoItem
                key={x.id}
                todo={x}
                activeTab={activeTab}
                ChangeStatusTodo={ChangeStatusTodo}
                removeHandler={removeHandler}
                EditHandler={EditHandler}
              ></TodoItem>
            ))
          : todo.map((x) => (
              <TodoItem
                key={x.id}
                todo={x}
                activeTab={activeTab}
                ChangeStatusTodo={ChangeStatusTodo}
                removeHandler={removeHandler}
                EditHandler={EditHandler}
              ></TodoItem>
            ))}
      </div>
    </div>
  );
}

export default TodoScreen;
