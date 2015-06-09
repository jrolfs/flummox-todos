
import React    from 'react';
import autobind from 'autobind-decorator';


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
        onChange={this.onChange}
        placeholder="What do you need to do?"
        type="text"
        value={this.state.value} />
    );
  }


  //
  // Events

  @autobind
  onChange(event) {
    const value = event.target.value;

    this.setState({ value: value });

    this.props.onChange(value);
  }
}

Input.propTypes = {
  initialValue: React.PropTypes.string,
  onChange: React.PropTypes.func
};


export default Input;
