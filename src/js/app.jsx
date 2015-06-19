
import React         from 'react';
import FluxComponent from 'flummox/component';

import Flux  from './Flux.es';
import Todos from './components/Todos.jsx';


const flux = new Flux();

React.render(
  <FluxComponent flux={flux}>
    <Todos />
  </FluxComponent>,
  document.getElementsByTagName('main')[0]
);
