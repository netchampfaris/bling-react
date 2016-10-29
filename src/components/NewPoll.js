import React, { Component } from 'react';
import { Form, FormFields, FormField, Header, Footer,
  Button, Layer, Article, Heading, Paragraph } from 'grommet';
import db from '../utils/fb';

class NewPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      options: Array(3).fill(null),
      success: false,
      successMessage: "",
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    this.setState({title: e.target.value});
  }

  handleOption(e) {
    const options = this.state.options;
    options[e.target.name - 1] = e.target.value;
    this.setState({options: options});
  }

  handleSubmit() {
    if(!this.state.title || !this.state.options[0]) return;

    db.ref('poll').push({
      title: this.state.title,
      options: this.state.options,
      active: true
    }, this.showSuccessDialog.bind(this));
  }

  showSuccessDialog() {
    const self = this;
    this.setState({ success: true });
    setTimeout(() => self.setState({ success: false }), 2000);
  }

  render() {
    return (
      <div>
      <Form>
        <Header>
          <h1>Create a new poll</h1>
        </Header>
        <FormFields>
          <fieldset>
            <FormField label="Title" htmlFor="input-id">
              <input id="input-id" name="title" type="text"
                onChange={this.handleTitle} />
            </FormField>
          </fieldset>
          <fieldset>
            <legend>
              Options
            </legend>
            <FormField key="1" label={'Option 1'}>
              <input name="1" type="text"
               onChange={this.handleOption}/>
            </FormField>
            <FormField key="2" label={'Option 2'}>
              <input name="2" type="text"
               onChange={this.handleOption}/>
            </FormField>
            <FormField key="3" label={'Option 3'}>
              <input name="3" type="text"
               onChange={this.handleOption}/>
            </FormField>
          </fieldset>
        </FormFields>
        <Footer pad={{vertical: 'medium'}}>
          <Button label="Add" primary={true}
            onClick={this.handleSubmit} />
        </Footer>
      </Form>
      <Dialog show={this.state.success}
        title="Success" body="Poll created successfully"/>
      </div>
    );
  }
}

function Dialog(props) {
  return (
    <Layer closer={true} align="top" hidden={!props.show}>
      <Header>
        <Heading tag="h3" align="center" strong={true}>
          {props.title}
        </Heading>
      </Header>
      <Article>
        <Paragraph>
          {props.body}
        </Paragraph>
      </Article>
    </Layer>
  );
}

export default NewPoll;
