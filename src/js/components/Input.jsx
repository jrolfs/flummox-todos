
import React from 'react';


class Input extends React.Component {

  constructor(props) {
    super(props);

    this.state = { value: props.initialValue || '' };
  }

  render() {
    return (
      <input
        placeholder="What do you need to do?"
        type="text"
        value={this.state.value} />
    );
  }
}

Input.propTypes = {
  initialValue: React.PropTypes.string
};


export default Input;
