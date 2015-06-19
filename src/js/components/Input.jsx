
import isFunction from 'is-function';
import React      from 'react';
import autobind   from 'autobind-decorator';
import keycode    from 'keycode';


class Input extends React.Component {

  //
  // Init

  constructor(props) {
    super(props);

    this.state = { value: props.initialValue || '' };
  }


  // Lifecycle

  render() {
    return (
      <input
        autoFocus={true}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        placeholder={this.props.placeholder}
        ref="input"
        type="text"
        value={this.state.value} />
    );
  }


  //
  // Control

  select() {
    React.findDOMNode(this.refs.input).select(...arguments);
  }

  getValue() {
    return this.state.value;
  }

  clear() {
    return this.setState({ value: '' });
  }


  //
  // Events

  @autobind
  onChange(event) {
    const value = event.target.value;

    this.setState({ value: value });

    if (isFunction(this.props.onChange)) this.props.onChange(value);
  }

  @autobind
  onKeyDown(event) {
    if (keycode(event) === 'enter') {
      if (isFunction(this.props.onEnter)) this.props.onEnter();
    }
  }
}

Input.propTypes = {
  initialValue: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onEnter: React.PropTypes.func,
  placeholder: React.PropTypes.string
};


export default Input;
