
import React from 'react';

import Header     from './Header.jsx';
import TodosList  from './TodosList.jsx';
import Footer     from './Footer.jsx';


class Todos extends React.Component {
  render() {
    return (
      <div className="todos-view">
        <h1>todos</h1>
        <div className="body">
          <Header />
          <TodosList />
          <Footer />
        </div>
      </div>
    );
  }
}


export default Todos;
