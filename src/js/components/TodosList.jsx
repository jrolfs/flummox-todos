
import React from 'react';

import Todo from './Todo.jsx';


class TodosList extends React.Component {
  render() {
    const todos = this.props.todos.map(todo => {
      return <Todo todo={todo} />;
    });

    return (
      <ul className="todos-list-view">
        {todos}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: React.PropTypes.array.isRequired
};

TodosList.defaultProps = {
  todos: [
    { id: 1, description: 'Omg first todo' },
    { id: 1, description: 'This is the second one' },
    { id: 1, description: 'And then you\'re done bro' }
  ]
};


export default TodosList;
