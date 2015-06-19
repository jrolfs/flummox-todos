
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

    this.actions = props.flux.getActions('todos');

    this.state = { isEditing: false };
  }


  //
  // Lifecycle

  render () {
    var content;

    const isEditing = this.state.isEditing;
    const todo = this.props.todo;

    if (isEditing) {
      content = (
        <Input
          initialValue={todo.get('description')}
          onAdd={this.onAdd}
          ref="input" />
      );
    } else {
      content = <span className="description">{todo.get('description')}</span>;
    }

    return (
      <li className={classNames('todo-item-view', { 'is-editing': isEditing })}>
        <Checkbox
          initiallyChecked={todo.get('completed')}
          onChange={this.onCheckboxChange} />
        {content}
        <button
          className={`${isEditing ? 'save' : 'edit'}-todo icon`}
          onClick={isEditing ? this.onSaveClick : this.onEditClick}>
          <Icon name={`icon-${isEditing ? 'circle-check' : 'cog'}`} />
        </button>
        <button
          className="remove-todo icon"
          onClick={this.onRemoveClick}>
          <Icon name="icon-trash" />
        </button>
      </li>
    );
  }


  //
  // Control

  save(attributes) {
    this.actions.update(Object.assign({ id: this.props.todo.get('id') }, attributes));
  }


  //
  // Events

  @autobind
  onCheckboxChange(isChecked) {
    this.save({ completed: isChecked });
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

    this.setState({ isEditing: false });
  }

  @autobind
  onRemoveClick() {
    this.actions.destroy(this.props.todo.get('id'));
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired
};


export default TodoItem;
