
import React from 'react';


class TodosList extends React.Component {
  render() {
    return (
      <ul className="todos-list-view">
        <li className="todo-view">
          <input type="checkbox" />
          <span className="description">Omg first todo</span>
          <button className="remove-todo"></button>
        </li>
        <li className="todo-view">
          <input type="checkbox" />
          <span className="description">This is the second one</span>
          <button className="remove-todo"></button>
        </li>
        <li className="todo-view">
          <input type="checkbox" />
          <span className="description">Then we're done</span>
          <button className="remove-todo"></button>
        </li>
      </ul>
    );
  }
}


export default TodosList;
