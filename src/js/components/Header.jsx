
import React from 'react';

import Input from './Input.jsx';


class Footer extends React.Component {
  render() {
    return (
      <header className="add-todo-view">
        <input type="checkbox" />
        <Input />
        <button className="add-todo"></button>
      </header>
    );
  }
}


export default Footer;
