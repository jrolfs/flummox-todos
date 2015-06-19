
import { Store } from 'flummox';
import Immutable from 'immutable';


export default class TodoStore extends Store {

  constructor(flux) {
    super();

    const actions = flux.getActions('todos');

    this.register(actions.fetch, this.onFetch);
    this.register(actions.create, this.onCreate);
    this.register(actions.update, this.onCreate);
    this.register(actions.destroy, this.onDestroy);

    this.state = { todos: new Immutable.Map() };
  }


  //
  // Events

  onFetch(todos = new Map()) {
    this.setState({ todos: this.state.todos.merge(todos) });
  }

  onCreate(todo) {
    this.setState({ todos: this.state.todos.set(todo.get('id'), todo) });
  }

  onUpdate(todo) {
    this.setState({ todos: this.state.todos.update(todo.get('id'), todo) });
  }

  onDestroy(id) {
    this.setState({ todos: this.state.todos.delete(id) });
  }


  //
  // Accessors

  getAll() {
    return this.state.todos;
  }
}
