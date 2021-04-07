import React from "react";
import "./Footer.scss";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <h2>Footer</h2>
      <li>
        Source:
        <a target="_blank" href="https://github.com/nhnghia1119/TodoList-App">
          https://github.com/nhnghia1119/TodoList-App
        </a>
      </li>
      <li>
        Link tham khảo:
        <a target="_blank" href="https://todomvc.com/examples/react/#/ ">
          https://todomvc.com/examples/react/#/
        </a>
      </li>
    </div>
  );
}

export default Footer;
