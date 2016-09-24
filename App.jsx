"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Cards, Card } from './Cards.jsx';
import NewCard from './NewCard.jsx';
import store from './appStore';



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
