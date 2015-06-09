
import React      from 'react';
import autobind   from 'autobind-decorator';
import classNames from 'classnames';

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
    const isEditing = this.state.isEditing;

    if (isEditing) {
      content = (
        <Input
          initialValue={todo.description}
          onAdd={this.onAdd}
          ref="input" />
      );
    } else {
      content = <span className="description">{todo.description}</span>;
    }

    return (
      <li className={classNames('todo-item-view', { 'is-editing': isEditing })}>
        <Checkbox onChange={this.onCheckboxChange} />
        {content}
        <button
          className={`${isEditing ? 'save' : 'edit'}-todo icon`}
          onClick={isEditing ? this.onSaveClick : this.onEditClick}>
          <Icon name={`icon-${isEditing ? 'circle-check' : 'cog'}`} />
        </button>
        <button className="remove-todo icon"> <Icon name="icon-trash" />
        </button>
      </li>
    );
  }


  //
  // Control

  save() {
    // TODO: update todo action
  }


  //
  // Events

  @autobind
  onCheckboxChange(isChecked) {
    this.save({ complete: isChecked });
  }

  @autobind
  onEditClick() {
    this.setState({ isEditing: true }, () => {
      this.refs.input.select();
    });
  }

  @autobind
  onSaveClick() {
    this.save({ description: this.refs.input.getValue() });
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired
};


export default TodoItem;
