
import React from 'react';

import Input from './Input.jsx';
import Icon  from './Icon.jsx';


class Footer extends React.Component {
  render() {
    return (
      <header className="header-view">
        <Icon className="check" name="icon-check" />
        <Input />
        <button className="add-todo icon">
          <Icon name="icon-plus" />
        </button>
      </header>
    );
  }
}


export default Footer;
