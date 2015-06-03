
import React from 'react';


class Filters extends React.Component {
  render() {
    return (
      <span className="filters">
        <a className="selected" data-filter="all" href="all">all</a>
        <span className="divider"></span>
        <a data-filter="active" href="active">active</a>
        <span className="divider"></span>
        <a data-filter="completed" href="completed">completed</a>
      </span>
    );
  }
}


export default Filters;
