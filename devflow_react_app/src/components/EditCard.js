import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
// import AppNavbar from './AppNavBar';

class EditCard extends Component {

  emptyItem = {
    cardTitle: '',
    cardOwner: '',
    cardNote: '',
    cardStatus: '',
    cardLogic: '',
    cardMisc: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const group = await (await fetch(`/deji_api/v1/cards/${this.props.match.params.id}`)).json();
      this.setState({item: group});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/deji_api/v1/cards', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/cards');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Card' : 'Add Card'}</h2>;

    return <div>
      {/* <AppNavbar/> */}
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="cardTitle">Title</Label>
            <Input type="text" name="cardTitle" id="cardTitle" value={item.cardTitle || ''}
                   onChange={this.handleChange} autoComplete="cardTitle"/>
          </FormGroup>
          <FormGroup>
            <Label for="cardOwner">Owner</Label>
            <Input type="text" name="cardOwner" id="cardOwner" value={item.cardOwner || ''}
                   onChange={this.handleChange} autoComplete="cardOwner"/>
          </FormGroup>
          <FormGroup>
            <Label for="cardNote">Note</Label>
            <Input type="text" name="cardNote" id="cardNote" value={item.cardNote || ''}
                   onChange={this.handleChange} autoComplete="cardNote"/>
          </FormGroup>
          <FormGroup>
            <Label for="cardClass">Classificastion</Label>
            <Input type="text" name="cardClass" id="cardClass" value={item.cardClass || ''}
                   onChange={this.handleChange} autoComplete="cardClass"/>
          </FormGroup>
          <FormGroup>
            <Label for="cardStatus">Status</Label>
            <Input type="text" name="cardStatus" id="cardStatus" value={item.cardStatus || ''}
                   onChange={this.handleChange} autoComplete="cardStatus"/>
          </FormGroup>
          <FormGroup>
            <Label for="cardLogic">Logic</Label>
            <Input type="text" name="cardLogic" id="cardLogic" value={item.cardLogic || ''}
                   onChange={this.handleChange} autoComplete="cardLogic"/>
          </FormGroup>
          <FormGroup>
            <Label for="cardMisc">Misc</Label>
            <Input type="text" name="cardMisc" id="cardMisc" value={item.cardMisc || ''}
                   onChange={this.handleChange} autoComplete="cardMisc"/>
          </FormGroup>
        
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/cards">Cancel</Button>
          </FormGroup>
         
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(EditCard);