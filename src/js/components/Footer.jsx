
import React from 'react';

import Filters from './Filters.jsx';


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-view">
        <span className="remaining">3 items remaining</span>
        <Filters />
        <a className="clear-completed">clear completed</a>
      </footer>
    );
  }
}


export default Footer;
