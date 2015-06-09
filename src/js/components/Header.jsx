
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

    this.state = { hasValue: false };
  }


  //
  // Lifecycle

  render() {
    return (
      <header className={classNames('header-view',  { 'has-value': this.state.hasValue })}>
        <Icon className="check" name="icon-check" />
        <Input
          placeholder="What do you need to do?" />
        <button className="add-todo icon">
          <Icon name="icon-plus" />
        </button>
      </header>
    );
  }


  //
  // Events

  @autobind
  onChange(value) {
    this.setState({ hasValue: !!value });
  }
}


export default Header;
