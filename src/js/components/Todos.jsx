
import React         from 'react';
import FluxComponent from 'flummox/component';

import Header   from './Header.jsx';
import TodoList from './TodoList.jsx';
import Footer   from './Footer.jsx';


class Todos extends React.Component {
  componentWillMount() {
    this.props.flux.getActions('todos').fetch();
  }

  render() {
    return (
      <div className="todos-view">
        <h1>todos</h1>
        <div className="body">
          <FluxComponent connectToStores={{
            todos: (store) => ({
              todos: store.getAll()
            })
          }}>
            <Header />
            <TodoList />
            <Footer />
          </FluxComponent>
        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  flux: React.PropTypes.instanceOf(require('flummox'))
};

export default Todos;
