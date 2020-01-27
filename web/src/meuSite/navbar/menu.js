import React from 'react';
import './menu.css';
// import {Container} from './style'

export default function Menu(){

    let menu = ["Home", "Sobre", "Contato"]

    const mostrarMenu = menu.map(m => <li> | {m} </li>)
    return(
        <div className="menu">
            <ul> 
                <h1><a className="empresa" href="#"><i class="fas fa-ice-cream"></i> Sorveteria </a></h1>
                {mostrarMenu} 
                
            </ul>
        </div>
    );
}