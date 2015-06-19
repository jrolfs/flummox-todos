
import React      from 'react';
import autobind   from 'autobind-decorator';
import classNames from 'classnames';

import Input from './Input.jsx';
import Icon  from './Icon.jsx';


class Header extends React.Component {

  //
  // Init

  constructor(props) {
    super(props);

    this.actions = props.flux.getActions('todos');

    this.state = { hasValue: false };
  }


  //
  // Lifecycle

  render() {
    return (
      <header className={classNames('header-view',  { 'has-value': this.state.hasValue })}>
        <Icon
          className="check"
          name="icon-check" />
        <Input
          onChange={this.onInputChange}
          onEnter={this.onInputEnter}
          placeholder="What do you need to do?"
          ref="input" />
        <button
          className="add-todo icon"
          onClick={this.onAddTodoClick}>
          <Icon name="icon-plus" />
        </button>
      </header>
    );
  }


  //
  // Control

  save() {
    const input = this.refs.input;

    this.actions.create({
      completed: false,
      description: input.getValue()
    });

    input.clear();
  }


  //
  // Events

  @autobind
  onInputChange(value) {
    this.setState({ hasValue: !!value });
  }

  @autobind
  onInputEnter() {
    this.save();
  }

  @autobind
  onAddTodoClick() {
    this.save();
  }
}


export default Header;
