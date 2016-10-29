import React, { Component } from 'react';
import { Heading, List, ListItem } from 'grommet';
import getPoll from '../utils/getPoll';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      options: [],
    }
    getPoll(this.props.params.key).then((a) => this.setState(a));
  }

  render() {
    return (
      <div>
      <Heading>{this.state.title}</Heading>
      <List>
        {
          this.state.options.map((option) => <ListItem key={option}>{option}</ListItem>)
        }
      </List>
      </div>
    );
  }
}

export default Poll;
