
import React from 'react';


class Icon extends React.Component {
  render() {
    const useTag = `<use xlink:href="/svg/icons.svg#${this.props.name}"></use>`;
    const className = `icon ${this.props.className}`;

    return (
      <svg
        className={className}
        dangerouslySetInnerHTML={{ __html: useTag }}
        viewBox="0 0 100 100" />
    );
  }
}

Icon.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string.isRequired
};


export default Icon;
