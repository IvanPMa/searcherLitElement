import {css} from 'lit';

export const cardStyles = css`
    :host {
        width: 98%;
        display: flex;
        padding: 8px;
    }
    :host .card-header {
        width: 40%;
        display: flex;
        flex-direction: column;
        margin-right: 10px;
    }

    :host .card-header img{
        border-radius: 10px 0px 0px 0px;
        width: 95%;
    }
    :host .card-section{
        padding: 0px 10px;
    }
    :host .card-section h2, p{
        font-size: 22px;
        font-weight: normal;
    }
    :host .card-info {
        width : 60%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 25px;
    }
    :host .card-info span {
        font-size: 16px;
        margin-right: 10px; 
        color: #eee;
    }
`;