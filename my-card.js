import {LitElement, html} from 'lit';
import { cardStyles } from './src/styles/cardStyles';


export class Card extends LitElement {
  static get styles() {
    return [cardStyles]
  }

  static get properties() {
    return {
      image : { type: String },
      name : { type: String },
      typeCharacter : { type : String },
      id : { type : Number },
      specie : { type : String },
      status : { type : String },
      gender : { type : String },
      origin : { type : String },
      location : { type : String }
    };
  }

  constructor() {
    super();
    this.image ='';
    this.name ='';
    this.typeCharacter ='';
    this.id = 0;
    this.specie ='';
    this.status ='';
    this.gender ='';
    this.origin ='';
    this.location ='';
    
  }

  showCard () {
   if(this.image!=''){
    return html`
      <div class="card-header">
        <img src="${this.image}" alt="${this.name}" />
        <div class="card-section">
          <h2>${this.name}</h2>
          <div>${this.location}</div>
        </div>
      </div>
      <div class="card-info">
        <div><span class="title">Origin: </span>${this.origin}</div>
        <div><span>Specie: </span>${this.specie}</div>
        <div><span>ID: </span>${this.id}</div>
        <div><span>Type: </span>${this.typeCharacter}</div>
        <div><span>Gender: </span>${this.gender}</div>
      </div>
    `
   } 
  }

  render() {
    return html`
      ${this.showCard()}
    `;
  }

}

window.customElements.define('my-card', Card);
