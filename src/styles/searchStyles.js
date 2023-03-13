import {css} from 'lit';

export const searchStyles = css`
    :host {
        width: 100%;
        display: flex;
        /* background-color: #31d514; */
        
    }

    :host form{
        display: flex;
        width: 100%;
    }
    :host .search{
        width: 100%;
        border-radius: 10px;
        padding: 0px 10px;
        font-size: 15px;
        font-weight: bold;
        background-color: transparent;
        color: white;
        border : none;
        outline: none;
    }
`;