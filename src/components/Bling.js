import React, { Component } from 'react';
import { App, Header, Title, Menu, Section } from 'grommet';
import { Link } from 'react-router';

class Bling extends Component {
  render() {
    return (
      <App>
        <Header justify="between" separator="bottom">
          <Title>
            <Link to="/">Bling</Link>
          </Title>
          <Menu direction="row" align="center" responsive={false}>
            <Link to="/newPoll">New Poll</Link>
            <Link to="/polls">Polls</Link>
          </Menu>
        </Header>
        <Section>
          {this.props.children}
        </Section>
      </App>
    );
  }
}

export default Bling;
