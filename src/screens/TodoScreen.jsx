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
    setActiveTabNew(0); //khi xoa newTodo
    //kiem tra tra ve vi tri
    if (idActive != "4") {
      setActiveTab(idActive);
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
    setActiveTabNew(0);
  };

  //set active newtodo
  const [activeTabNew, setActiveTabNew] = useState(0);
  const data = (id) => {
    setActiveTabNew(id);
    setActiveTab("4");
  };

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
      <div className="todolist__left">
        <div>
          <h5>Danh mục(todo list)</h5>
          <li
            className={classnames({ active: activeTab == "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            All
          </li>
          <li
            className={classnames({ active: activeTab == "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Done
          </li>
          <li
            className={classnames({ active: activeTab == "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Undone
          </li>
        </div>
        <div>
          <h5>Bài viết mới</h5>
          <div className="todolist__left__scroll">
            {todoList.map((x) => (
              <li
                className={classnames({ active: activeTab == "4" })}
                onClick={() => {
                  data(x);
                }}
              >
                {x.content}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="todolist__right">
        <div className="todolist__right__input">
          <TodoForm onSubmit={HandleTodoFormSubmit}></TodoForm>
        </div>
        <div className="todolist__right__item">
          <p className="todolist__right__item__qty">
            {activeTab === "1"
              ? todo.length
              : activeTab === "2"
              ? qtyItem(false)
              : activeTab === "3"
              ? qtyItem(true)
              : activeTab == "4"
              ? "1"
              : "0"}
            <span> Item</span>
          </p>
          <div className="todolist__right__item__scroll">
            {activeTabNew != 0 ? (
              <TodoItem
                key={activeTabNew.id}
                todo={activeTabNew}
                activeTab={activeTab}
                ChangeStatusTodo={ChangeStatusTodo}
                removeHandler={removeHandler}
                EditHandler={EditHandler}
              ></TodoItem>
            ) : (
              todo.map((x) => (
                <TodoItem
                  key={x.id}
                  todo={x}
                  activeTab={activeTab}
                  ChangeStatusTodo={ChangeStatusTodo}
                  removeHandler={removeHandler}
                  EditHandler={EditHandler}
                ></TodoItem>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoScreen;
