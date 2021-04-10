import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./TodoForm.scss";
import { Button, Form, Input, InputGroup, InputGroupAddon } from "reactstrap";
TodoForm.propTypes = {
  edit: PropTypes.object,
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  edit: null,
  onSubmit: null,
};

function TodoForm(props) {
  const { edit, onSubmit } = props;

  const [value, SetValue] = useState(props.edit ? props.edit.value : "");
  //edit
  const valueRef = useRef(null);

  useEffect(() => {
    valueRef.current.focus();
  });

  // thay đổi giá trị khi gõ
  const HandleChange = (e) => {
    SetValue(e.target.value);
  };
  const handleSubmit = (e) => {
    //ngan reload page
    e.preventDefault();
    if (!onSubmit) return;
    const formValue = {
      content: value,
    };

    if (value) {
      onSubmit(formValue);
    }
    //reset value
    SetValue("");
  };
  return (
    <div className="todoform">
      {props.edit ? (
        <Form onSubmit={handleSubmit} className="todoform__edit">
          <Input
            placeholder="Nhập Todo"
            type="text"
            value={value}
            onChange={HandleChange}
            ref={valueRef}
          />
        </Form>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={value}
            onChange={HandleChange}
            ref={valueRef}
            placeholder="What needs to be done?"
          />
        </Form>
      )}
    </div>
  );
}

export default TodoForm;
