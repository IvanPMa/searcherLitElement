import {LitElement, html} from 'lit';
import { apiRequest,reloadInfo } from './apiRequest';
import { styles } from './src/styles/styles';
// import { apiRequest } from './apiRequest';

export class MyElement extends LitElement {
  static get styles() {
    return [styles]
  }

  static get properties() {
    return {
      word : { type : String },
      data : { type : Array },
      image : { type: String },
      name : { type: String },
      typeCharacter : { type : String },
      id : { type : Number },
      specie : { type : String },
      status : { type : String },
      gender : { type : String },
      origin : { type : String },
      location : { type : String },
      pages : { type:Number},
      currentPage : { type : Number}
    };
  }

  constructor() {
    super();
    this.word = '';
    this.data = [];

    this.image ='';
    this.name ='';
    this.typeCharacter ='';
    this.id = 0;
    this.specie ='';
    this.status ='';
    this.gender ='';
    this.origin ='';
    this.location ='';
    this.pages = 0;
    this.currentPage = 0;
    
  }

  searchEvent(event){
    this.searchInfo(event.detail)
    .then(()=> this.dafaultSelection())
    .then(()=> this.currentPage = 1)
  }

  async searchInfo(detail){
    this.word = detail;
    console.log(this.word);
    const [info, totalPages] = await apiRequest(this.word)
    this.data = info
    this.pages = totalPages
    // .then(()=> this.dafaultSelection())
    // .then(()=>this.setPagination());
    
    // console.log(this.data);
  }

  dafaultSelection(){
    // Set Default firts selection
    this.id = this.data[0].id;
    this.image = this.data[0].image;
    this.name = this.data[0].name;
    this.typeCharacter = this.data[0].type;
    this.specie = this.data[0].species;
    this.status = this.data[0].status;
    this.gender = this.data[0].gender;
    this.origin = this.data[0].origin;
    this.location = this.data[0].location;
    
  }
  
  captureButton(event){
    // console.log("Button ID:",event.detail)
    this.id = event.detail;
    console.log(this.id);
    this.extractSelection(this.id)
  }

  extractSelection(id){
    let character = this.data.filter( element =>  {
      return (element.id == id)})
    console.log(character);
    this.image = character[0].image;
    this.name = character[0].name;
    this.typeCharacter = character[0].type;
    this.specie = character[0].species;
    this.status = character[0].status;
    this.gender = character[0].gender;
    this.origin = character[0].origin;
    this.location = character[0].location;
    console.log(this.name)
  }


  capturePrev(){
    // console.log(event)
    if(this.currentPage > 1){
      this.currentPage = this.currentPage -1;
      this.changeCurrentPage();
    }
  }
  captureNext(){
    // console.log(event)
    if(this.currentPage < this.pages){
      this.currentPage = this.currentPage + 1;
      this.changeCurrentPage();
    }
  }
  
  async changeCurrentPage(){
    const info = await reloadInfo(this.word,this.currentPage)
    this.data = info;
  }
  render() {
    return html`
      <my-navigator 
        class="selector"
        .info="${this.data}"
        pages="${this.pages}"
        currentPage="${this.currentPage}"
        @click-button =${this.captureButton}
        @prev-button =${this.capturePrev}
        @next-button =${this.captureNext}
      >
      </my-navigator>
      
      <div class="section">
          <my-search class="search"
            @input-search=${this.searchEvent}
          ></my-search>
          <my-card 
            class= "card"
            image="${this.image}"
            name="${this.name}"
            typeCharacter="${this.typeCharacter}"
            id="${this.id}"
            specie="${this.specie}"
            status="${this.status}"
            gender="${this.gender}"
            origin="${this.origin}"
            location="${this.location}"
          ></my-card>
      </div>
      
    `;
  }

}

window.customElements.define('my-element', MyElement);
