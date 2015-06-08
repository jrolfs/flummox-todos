
import React      from 'react';
import classNames from 'classnames';


class Icon extends React.Component {
  render() {
    const useTag = `<use xlink:href="/svg/icons.svg#${this.props.name}"></use>`;
    const className = this.props.className;
    const classes = className && className.split(' ');

    return (
      <svg
        className={classNames('icon', classes)}
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
