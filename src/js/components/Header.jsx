
import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <header className="add-todo-view">
        <input type="checkbox" />
        <input placeholder="What do you need to do?" type="text" />
        <button className="add-todo"></button>
      </header>
    );
  }
}


export default Footer;
