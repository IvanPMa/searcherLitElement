import {LitElement, html} from 'lit';
import { apiRequest } from './apiRequest';
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
    this.setWord(event.detail)
    .then(()=> this.dafaultSelection())
  }

  async setWord(detail){
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
    this.image = this.data[0].image;
    this.name = this.data[0].name;
    this.typeCharacter = this.data[0].type;
    this.specie = this.data[0].species;
    this.status = this.data[0].status;
    this.gender = this.data[0].gender;
    this.origin = this.data[0].origin.name;
    this.location = this.data[0].location.name;
  }
  
  captureButton(event){
    // console.log("Button ID:",event.detail)
    this.id = event.detail;
    console.log(this.id);
    this.extractSelection(this.id)
  }

  extractSelection(id){
    let character = this.data[this.currentPage].filter( element =>  {
      return (element.id == id)})
    console.log(character);
    this.image = character[0].image;
    this.name = character[0].name;
    this.typeCharacter = character[0].type;
    this.specie = character[0].species;
    this.status = character[0].status;
    this.gender = character[0].gender;
    this.origin = character[0].origin.name;
    this.location = character[0].location.name;
    console.log(this.name)
  }

  setPagination = ()=>{
    let newInfo = [];
    let sizePages = Math.ceil(this.data.length / 20);
    //Create pages
    for (let i = 0 ; i < sizePages; i++){
      newInfo.push([])
    }
    
    //Insert Data on pages
    let counter = 0, flag = 1;
    for (let i = 0 ; i < this.data.length; i++){
      newInfo[counter].push(this.data[i]);
      
      if (flag === 20){
        flag = 0;
        counter ++;
      }

      flag ++;
    }
    this.pages = newInfo.length;
    this.data = newInfo;
    console.log(this.pages)
    console.log(this.data.length);
    console.log(newInfo);
  }

  capturePrev(){
    // console.log(event)
    if(this.currentPage > 0){
      this.currentPage = this.currentPage -1;
    }
  }
  captureNext(){
    // console.log(event)
    if(this.currentPage < this.pages){
      this.currentPage = this.currentPage + 1;
    }
  }
  
  render() {
    return html`
      <my-navigator 
        class="selector"
        .info="${this.data[this.currentPage]}"
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
