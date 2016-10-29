import { EventEmitter } from "events";
// import db from ''

class PollsStore extends EventEmitter {
  constructor() {
    super();
    this.polls = this.getPolls();
  }

  getPolls() {
    const self = this;
    let polls;
    db.ref('poll').once('value', function (snap) {
      polls = self.state.polls.slice();
      for (let key in snap.val()) {
        if (snap.val().hasOwnProperty(key)) {
          let poll = snap.val()[key];
          poll.key = key;
          polls.push(poll);
        }
      }
      self.setState({ polls: polls });
    });
  }
}