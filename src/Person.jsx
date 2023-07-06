import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
  }
  static defaultProps = {
    gender: "unknown",
    age: "19 (default)"
  }

  render() {

    return (
      <ul>
        <li>name: {this.props.name}</li>
        <li>gender: {this.props.gender}</li>
        <li>age: {this.props.age}</li>
      </ul>
    );
  }
}





export default Person;