import React from 'react';
import './rodape.css';
// import {Container} from './style'

export default function Rodape(){
    return(
        <div >
            <footer>
                <div class="container">
                    <br/>
                    <div  class="row view-group">
                        <div class="item col-xs-7 col-lg-7">  
                            <h4 >Endereço</h4>
                            <p>
                            Rua João Vilela Oliveira, 176 - Campo do Galvão, <strong>12509-320</strong>
                            <br/>
                            <strong>Guaratinguetá/SP</strong>
                            </p>
                </div>
                <div  class="row view-group">
                    <div class="item col-xs-12 col-lg-12">  
                        <h4>Contato</h4>
                        <p>
                        <strong>Email:</strong> contato@novaimobiliaria.com.br
                        <br/>
                        <strong>Telefone:</strong> (12)3122-1580
                        </p>
                </div>
                <br/>
            </footer>
        </div>
    );
}