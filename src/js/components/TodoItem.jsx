
import React from 'react';

import Input from './Input.jsx';


class TodoItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isEditing: false };
  }

  render () {
    var content;
    const todo = this.props.todo;

    if (this.state.isEditing) {
      content = <Input initialValue={todo.description} onAdd={this.onAdd} />;
    } else {
      content = <span className="description">{todo.description}</span>;
    }

    return (
      <li className="todo-view">
        <input type="checkbox" />
        {content}
        <button className="remove-todo"></button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired
};


export default TodoItem;
