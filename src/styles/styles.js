import {css} from 'lit';

export const styles = css`
    :host {
        display: flex;
        width: 100%;
        height: 100vh;
        /* background-color: #017e3c; */
        background-color: #051918;
        overflow: hidden;
        font-family : 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    :host .selector{
        width:35%;
        color:white;
        background-color: #102422;

        /* box-shadow: 0px 0px 30px #80ba3d; */
    }
    
    :host .section{
        display: flex;
        flex-direction: column;
        padding: 60px 200px;
        width:65%;
        height: 100vh;
        color:white; 
    }
    :host .card , .search{
        background-color: #31d514;
        border: 1px solid #017e3c;
        box-shadow: 0px 0px 5px #80ba3d;
        transition: all .5s;
    }
    :host .card:hover , .search:hover{
        
        box-shadow: 0px 0px 30px #80ba3d;
    }

    :host .search{
        width: 100%;
        margin-bottom: 40px;
        font-size: 20px;
        height: 40px;
        border-radius: 20px;
    }
    :host .card{
        height: 65%;
        font-size: 20px;
        border-radius: 20px;
    }
`;