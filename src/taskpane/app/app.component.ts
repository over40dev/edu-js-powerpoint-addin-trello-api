import {Component} from "@angular/core";
const template = require("./app.component.html");
// import dataService from './services/sample-data-service';
/* global console, Office, require */

@Component({selector: "app-home", template: template})
export default class AppComponent {

  welcomeMessage = "CogentX Trello API";
  boards = [];
  cards = [];

  async authorizeWithTrello() {}

  async DeauthorizeWithTrello() {}

  getBoardsFromTrello() {

    this.boards = [];

    const boards = [
      {
        "id": "1",
        "name": "My Sample Board",
        "closed": false
      }, {
        "id": "2",
        "name": "My Second Sample Board",
        "closed": false
      }
    ];

    this
      .boards
      .push(...boards);

  }

  async getCardsFromTrello() {

    const cards = [
      {
        "name": "Card 1",
        "desc": "Description 1"
      }, {
        "name": "Card 2",
        "desc": "Description 2"
      }
    ];

    await this
      .cards
      .push(...cards);

  }

  async run() {
    /**
    * Insert your PowerPoint code here
    */

    Office
      .context
      .document
      .setSelectedDataAsync("Hello CogentX!", {
        coercionType: Office.CoercionType.Text
      }, result => {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error(result.error.message);
        }
      });
  }

}
