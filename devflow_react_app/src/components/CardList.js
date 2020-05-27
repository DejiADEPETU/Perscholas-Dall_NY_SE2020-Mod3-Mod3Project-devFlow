import React, { Component } from 'react';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';

class CardList extends Component {

  constructor(props) {
    super(props);
    this.state = {cards: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('deji_api/v1/cards')
      .then(response => response.json())
      .then(data => this.setState({cards: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/deji_api/v1/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedCards = [...this.state.cards].filter(i => i.id !== id);
      this.setState({cards: updatedCards});
    });
  }

  render() {
    const {cards, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const cardList = cards.map(card => {
      return <tr key={card.id}>
        <td style={{whiteSpace: 'nowrap'}}>{card.firstName}</td>
        <td>{card.lastName}</td>
        <td>{card.email}</td>
        <td>

          {/*
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/card/" + card.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(card.id)}>Delete</Button>
          </ButtonGroup>
           */}

          <div>
            <button size="sm" color="primary" tag={Link} to={"/card/" + card.id}>Edit</button>
            <button size="sm" color="danger" onClick={() => this.remove(card.id)}>Delete</button>
          </div>

        </td>
      </tr>
    });

    return (
      <div>
        {/* <AppNavbar/> */}
        <div>
          <div className="float-right">
            <button color="success" tag={Link} to="/card/new">Add Group</button>
          </div>
          <h3>My Cards List</h3>
          <table className="mt-4">
            <thead>
            <tr>
              <th width="15%">Title</th>
              <th width="15%">Owner</th>
              <th>Note</th>
              <th width="10%">Status</th>
              <th width="10%">Logic</th>
              <th width="10%">Misc</th>
            </tr>
            </thead>
            <tbody>
            {cardList}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CardList;