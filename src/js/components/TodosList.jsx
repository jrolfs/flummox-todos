
import React from 'react';

import Todo from './Todo.jsx';


class TodosList extends React.Component {
  render() {
    return (
      <ul className="todos-list-view">
        <Todo />
      </ul>
    );
  }
}


export default TodosList;
