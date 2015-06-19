
import { Actions }         from 'flummox';
import { Map, OrderedMap } from 'immutable';
import shortid             from 'shortid';

import LocalStorageUtils from '../utils/LocalStorageUtils.es';


const KEY = 'flummox-todos';

function getMap() {
  return LocalStorageUtils.get(KEY);
}

function setMap(map) {
  return LocalStorageUtils.set(KEY, map);
}


export default class TodoActions extends Actions {
  fetch() {
    const todos = getMap();

    if (todos) return todos;
  }

  create(todo) {
    const map = getMap() || new OrderedMap();
    const id = shortid.generate();

    todo = new Map(todo).merge({ id: id });

    setMap(map.set(id, todo));

    return todo;
  }

  update(attributes) {
    let updatedTodo;

    setMap(getMap().update(attributes.id, (todo) => {
      updatedTodo = todo.merge(attributes);
      return updatedTodo;
    }));

    return updatedTodo;
  }

  destroy(id) {
    setMap(getMap().delete(id));

    return id;
  }
}
