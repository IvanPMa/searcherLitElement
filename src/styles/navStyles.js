import {css} from 'lit';

export const navStyles = css`
    :host {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    :host .title{
        width: 100%;
        text-align: center;
        font-size: 30px;
        height:10vh;
    }
    :host .select-section{
        width :80%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: auto;
        overflow-y: scroll;
        justify-content: space-between;
    }
    :host .select-section .section-button{
        margin: auto;
        width: 80%;
        height: 50px;
        min-height: 50px;
        font-size: 20px;
        padding: 5px 10px;
        cursor: pointer;
        margin-top: 20px;
        background-color: #31d514;
        border: none;
        color: white;
        border-radius : 20px;
        overflow: hidden;
        transition: box-shadow .3s, border 0s;
    }
    :host .select-section .section-button:hover{
        box-shadow: 0px 0px 10px #80ba3d;
    }
    :host .select-section .section-button:focus{
        box-shadow: 0px 0px 10px #80ba3d;
        border: 3px dotted white;
    }
    :host .pagination{
        width: 70%;
        height: 10vh;
        display: flex;
        margin: auto;
        
        
    }

    :host .pagination .button-page{
        width: 20%;
        height: 40px;
        background-color: #051918;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 100%;
    }
    :host .pagination .text-page{
        width: 60%;
        text-align: center;
    }
`;