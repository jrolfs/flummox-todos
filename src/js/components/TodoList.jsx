
import React from 'react';

import TodoItem from './TodoItem.jsx';


class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map(todo => {
      return <TodoItem todo={todo} />;
    });

    return (
      <ul className="todos-list-view">
        {todos}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
};

TodoList.defaultProps = {
  todos: [
    { id: 1, description: 'Omg first todo' },
    { id: 1, description: 'This is the second one' },
    { id: 1, description: 'And then you\'re done bro' }
  ]
};


export default TodoList;
