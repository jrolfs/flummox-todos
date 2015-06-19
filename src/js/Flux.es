import { Flummox } from 'flummox';

import TodoActions from './actions/TodoActions.es';
import TodoStore from './stores/TodoStore.es';


export default class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('todos', TodoActions);
    this.createStore('todos', TodoStore, this);
  }
}
