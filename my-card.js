import {LitElement, html} from 'lit';
import { cardStyles } from './src/styles/cardStyles';


export class Card extends LitElement {
  static get styles() {
    return [cardStyles]
  }

  static get properties() {
    return {
      image : {
        type: String
      },
      name : {
        type: String
      },
      typeCharacter : {
        type : String
      },
      id : {
        type : Number
      },
      specie : {
        type : String
      },
      status : {
        type : String
      },
      gender : {
        type : String
      },
      origin : {
        type : String
      },
      location : {
        type : String
      }
    };
  }

  constructor() {
    super();
    this.image ='https://rickandmortyapi.com/api/character/avatar/1.jpeg';
    this.name ='';
    this.typeCharacter ='';
    this.id ='';
    this.specie ='';
    this.status ='';
    this.gender ='';
    this.origin ='';
    this.location ='';
    
  }

  render() {
    return html`
      <img src="${this.image}" alt="${this.name}" />

      <div class="card-section">
        <h2>${this.name}Rick Sanchez</h2>

        <div class="card-info">
          lorem impsum
        </div>
      </div>
    `;
  }

}

window.customElements.define('my-card', Card);
