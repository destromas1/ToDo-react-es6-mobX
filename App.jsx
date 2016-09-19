"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Cards extends React.Component {

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
    this.props.store.addNewCard(this.refs.cardText.value);
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

class AppStore {
  
  @observable cards = [
    "My Card1",
    "My Card2",
    "My Card3"
  ];

  addNewCard(cardText) {
    console.log("AppStore.addNewCard" , cardText);
    this.cards.push(cardText);
  }
}

const store = new AppStore();

class App extends React.Component {
  
  constructor() {
    super();    
    self = this;
  }

  render() {
    return(
      <div>
        <NewCard store={store}/>
        <Cards cards={store.cards}/>
      </div>
    )
	}
};

ReactDOM.render(
  <App/>
  , document.getElementById('app'));

