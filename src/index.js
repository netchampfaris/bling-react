import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Bling from './components/Bling';
import NewPoll from './components/NewPoll';
import Polls from './components/Polls';
import Poll from './components/Poll';
import Vote from './components/Vote';
import '../node_modules/grommet/scss/vanilla/index.scss';




ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Bling}>
      <Route path="newPoll" component={NewPoll} />
      <Route path="polls">
        <IndexRoute component={Polls} />
        <Route path="poll/:key" component={Poll} />
        <Route path="vote/:key" component={Vote} />
      </Route>
    </Route>
  </Router>
  ), document.getElementById('root')
);
