
import React from 'react';

import Header   from './Header.jsx';
import TodoList from './TodoList.jsx';
import Footer   from './Footer.jsx';


class Todos extends React.Component {
  render() {
    return (
      <div className="todos-view">
        <h1>todos</h1>
        <div className="body">
          <Header />
          <TodoList />
          <Footer />
        </div>
      </div>
    );
  }
}


export default Todos;
