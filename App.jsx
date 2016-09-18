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
    return  <div>
          		<Card>My Card1</Card>
          		<Card>My Card2</Card>
            </div>
  }
  
};

class Card extends React.Component {
  render() {
    return  <div>
              <h1>{this.props.children}</h1>
            </div>
	}
}

ReactDOM.render(
	<Cards/>
	, document.getElementById('app'));
