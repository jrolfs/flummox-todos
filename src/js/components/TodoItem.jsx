
import React from 'react';

import Input    from './Input.jsx';
import Icon     from './Icon.jsx';
import Checkbox from './Checkbox.jsx';


class TodoItem extends React.Component {

  //
  // Init

  constructor(props) {
    super(props);

    this.state = { isEditing: false };
  }


  //
  // Lifecycle

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
        <Checkbox />
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
