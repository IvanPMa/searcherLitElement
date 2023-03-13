import {LitElement, html} from 'lit';
import { navStyles } from './src/styles/navStyles';


export class Navigator extends LitElement {
  static get styles() {
    return [navStyles]
  }

  static get properties() {
    return {
      name : { type : String },
      info : { type : Array },
      pages : { type : Number },
      currentPage: {type :Number},
      infoPage : {type: Array}
    };
  }

  constructor() {
    super();
    this.name = '';
    this.info = [];
    this.pages = 0;
    this.currentPage = 0;
  }

  onClickButton(id){
    console.log("Boton presionado");
    this.dispatchEvent( new CustomEvent('click-button',{
      detail: id,
      composed : true,
      bubbles: true
    }))
  }

  prevButton(){
    console.log("Prev button clicked")
    this.dispatchEvent( new CustomEvent('prev-button',{
      detail: 'Prev Page'
    }))
  }
  nextButton(){
    console.log("Next button clicked")
    this.dispatchEvent( new CustomEvent('next-button',{
      detail: 'Next Page'
    }))
  }

  showCurrenPage(){
    if (this.pages > 0 && this.currentPage != this.pages)
      return html`${this.currentPage+1}`
    else 
      return html`${this.currentPage}`
  }
  render() {
    return html`
      <h2 class="title">Characters</h2>
      <div class="select-section">
        ${this.info.map(
          (element)=>
            html`
              <button 
                class="section-button"
                id=${element.id}
                @click=${()=>this.onClickButton(element.id)}
                >
                ${element.name}
              </button>   
            `
        )}
        
      </div>

      <div class="pagination">
        <button
          class="button-page"
          @click = ${()=> this.prevButton()}
        ><</button>
        <p class="text-page">${this.showCurrenPage()}  of ${this.pages}</p>
        <button 
          class="button-page"
          @click = ${()=> this.nextButton()}
          >></button>
      </div>
    `;
  }

}

window.customElements.define('my-navigator', Navigator);
