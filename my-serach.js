import {LitElement, html} from 'lit';
import { searchStyles } from './src/styles/searchStyles';


export class Search extends LitElement {
  static get styles() {
    return [searchStyles]
  }

  static get properties() {
    return {
      word: {
        type: String
      },
      info : {
        type: Array
      }
    };
  }

  constructor() {
    super();
    this.word = '';
    this.info = [];
  }


  searchWord(event){
    console.log("Formulario enviado");
    event.preventDefault();
    this.dispatchEvent( new CustomEvent('input-search',{
      detail: this.word,
      composed : true,
      bubbles: true
    }))
  }  

  setInfo(event){
    this.word = event.target.value;
  }
  render() {
    return html`
      <form @submit=${this.searchWord}>
        <input 
          class = "search"
          type = "text"
          .value = "${this.word}"
          @input ="${this.setInfo}"
          placeholder = "Search"
        /> 
      </form>
    `;
  }

}

window.customElements.define('my-search', Search);
