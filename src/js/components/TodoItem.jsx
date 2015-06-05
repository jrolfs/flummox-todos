
import React from 'react';

import Input from './Input.jsx';
import Icon  from './Icon.jsx';


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
      <li className="todo-item-view">
        <input type="checkbox" />
        {content}
        <button className="edit-todo icon">
          <Icon name="icon-cog" />
        </button>
        <button className="remove-todo icon">
          <Icon name="icon-trash" />
        </button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired
};


export default TodoItem;
