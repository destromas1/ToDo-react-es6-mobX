import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';


@observer
export class Cards extends React.Component {

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

export class Card extends React.Component {
  render() {
    return(
      <div>
        <h3>{this.props.children}</h3>
      </div>
    )
  }
};
