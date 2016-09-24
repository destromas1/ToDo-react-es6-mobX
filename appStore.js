import { observable } from 'mobx';
import { observer } from 'mobx-react';

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

export default store;
