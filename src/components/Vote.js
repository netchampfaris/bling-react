import React, { Component } from 'react';
import { Heading, Button } from 'grommet';
import db from '../utils/fb';

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Test",
      options: ["Hey", "Click", "Close"],
    }
  }

  render() {
    return (
      <div>
      <Heading>{this.state.title}</Heading>
      {
        this.state.options.map(
          (option) => <Button>{option}</Button>
        )
      }
      </div>
    );
  }
}

export default Vote;
