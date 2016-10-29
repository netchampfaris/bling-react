import React, { Component } from 'react';
import { List, ListItem } from 'grommet';
import { browserHistory } from 'react-router';
import db from '../utils/fb';

class Polls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: []
    }
    this.getPolls();
  }

  getPolls() {
    const self = this;
    let polls;
    db.ref('poll').once('value', function(snap) {
      polls = self.state.polls.slice();
      for(let key in snap.val()) {
        if(snap.val().hasOwnProperty(key)) {
          let poll = snap.val()[key];
          poll.key = key;
          polls.push(poll);
        }
      }
      self.setState({polls: polls});
    });
  }

  handleClick(key) {
    browserHistory.push('/polls/poll/'+key);
  }

  render() {
    return (
      <List>
        {
          this.state.polls.map((poll) =>
            <ListItem key={poll.key} onClick={this.handleClick.bind(this, poll.key)}>
              {poll.title}
            </ListItem>
          )
        }
      </List>
    );
  }
}

export default Polls;
