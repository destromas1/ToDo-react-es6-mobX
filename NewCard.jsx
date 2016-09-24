import React from 'react';


export default class NewCard extends React.Component {

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
