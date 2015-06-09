
import _          from 'lodash';
import React      from 'react';
import autobind   from 'autobind-decorator';
import classNames from 'classnames';

import Icon from './Icon.jsx';


class Checkbox extends React.Component {

  // 
  // Init

  constructor(props) {
    super(props);

    this.state = { isChecked: false };
  }


  //
  // Lifecycle

  render() {
    return (
      <label className={classNames('checkbox', { 'is-checked': this.state.isChecked })}>
        <input
          checked={this.state.isChecked}
          onChange={this.onChange}
          type="checkbox" />
        <Icon name="icon-check" />
      </label>
    );
  }


  //
  // Events

  @autobind
  onChange(event) {
    const isChecked = event.target.checked;

    this.setState({ isChecked: isChecked });

    if (_.isFunction(this.props.onChange)) this.props.onChange(isChecked);
  }
}

Checkbox.propTypes = {
  onChange: React.PropTypes.func
};


export default Checkbox;
