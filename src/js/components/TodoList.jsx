
import React              from 'react';
import FluxComponent      from 'flummox/component';
import ImmutablePropTypes from 'react-immutable-proptypes';

import TodoItem from './TodoItem.jsx';


class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map(todo => {
      return (
        <FluxComponent>
          <TodoItem todo={todo} />
        </FluxComponent>
      );
    });

    return (
      <ul className="todos-list-view">
        {todos}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: ImmutablePropTypes.list.isRequired
};


export default TodoList;
