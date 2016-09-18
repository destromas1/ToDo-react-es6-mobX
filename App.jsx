"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class Cards extends React.Component {

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

  render(){
    return(
      <div>
        {
          this.state.cards.map(function(item, i){
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
}

ReactDOM.render(
	<Cards/>
	, document.getElementById('app'));
