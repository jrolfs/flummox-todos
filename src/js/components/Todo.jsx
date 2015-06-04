
import React from 'react';


class Todo extends React.Component {
  render () {
    return (
      <li className="todo-view">
        <input type="checkbox" />
        <span className="description">Omg first todo</span>
        <button className="remove-todo"></button>
      </li>
    );
  }
}


export default Todo;
