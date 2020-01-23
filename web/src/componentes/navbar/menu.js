import React from 'react';
import './menu.css';
// import {Container} from './style'

export default function Menu(){
    return(
        <div className="menu">
            <ul>
                <li> Home </li>
                <li> Notícia </li>
                <li> Contato </li>
            </ul>
        </div>
    );
}