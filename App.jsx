"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class Cards extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     cards: [
  //       "My Card1",
  //       "My Card2",
  //       "My Card3"
  //     ]
  //   }
  // }

  render(){
    return(
      <div>
        {
          this.props.cards.map(function(item, i){
            return <Card key={i}>{item}</Card> ;
          })
        }
      </div>
    )
  }
};

class Card extends React.Component {
  render() {
    return(
      <div>
        <h3>{this.props.children}</h3>
      </div>
    )
	}
};

class NewCard extends React.Component {

  constructor(){
    super();
    this.createCard = this.createCard.bind(this);
  }

  createCard(){
    console.log(this.refs.cardText.value);
  }

  render() {
    return(
      <div>
        <input ref="cardText" type="text"></input>
        <button onClick={this.createCard}>Create</button>
      </div>
    )
	}
};

class App extends React.Component {

  // constructor(){
  //   super();
  //   this.createCard = this.createCard.bind(this);
  // }

  constructor(){
    super();
    this.state = {
      cards: [
        "My Card1",
        "My Card2",
        "My Card3"
      ]
    }
  }

  // addNewCard(){
  //   console.log(this.refs.cardText.value);
  // }

  render() {
    return(
      <div>
        <NewCard/>
        <Cards cards={this.state.cards}/>
      </div>
    )
	}
};

ReactDOM.render(
  <App/>
	, document.getElementById('app'));
