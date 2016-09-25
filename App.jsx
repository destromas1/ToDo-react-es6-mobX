"use strict";

import React from 'react';
import { Cards, Card } from './Cards.jsx';
import NewCard from './NewCard.jsx';
import store from './appStore';


export default class App extends React.Component {
  render() {
    return(
      <div>
        <NewCard store={store}/>
        <Cards cards={store.cards}/>
      </div>
    )
  }
};
