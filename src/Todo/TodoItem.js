import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, index }) {
  return (
    <li>
      <span>
        <input type="checkbox"></input>
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
