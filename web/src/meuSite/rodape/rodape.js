import React from 'react';
import './rodape.css';
// import {Container} from './style'

export default function Rodape(){
    return(
        <div className="rodape">
            <footer>
                <div class="container"/>
                    <br/>
                    <div  class="row view-group"/>
                        <div class="item col-xs-12 col-lg-12">  
                            <h4 className="titulo-h4">Endereço</h4>
                            <p className="paragrafo-p">
                            Rua João Vilela Oliveira, 176 - Campo do Galvão, <strong>12509-320</strong>
                            <br/>
                            <strong>Guaratinguetá/SP</strong>
                            </p>
                </div>
                <div  class="row view-group"/>
                    <div class="item col-xs-12 col-lg-12">  
                        <h4 className="titulo-h4">Contato</h4>
                        <p className="paragrafo-p">
                        <strong>Email:</strong> contato@novaimobiliaria.com.br
                        <br/>
                        <strong>Telefone:</strong> (12)3122-1580
                        </p>
                </div>
                <br/>
            </footer>

            <footer style="background:rgb(21, 157, 175);">
                <div class="container"/>
                <br/>
                <div class="row view-group text-center">
                    <div class="item col-xs-12 col-lg-12">
                        <h6 className="subtitulo-h6"> © Nova Imobiliária 2019 - All Rights Reserved </h6>
                    
                        <a className="palavra-a" href="https://pt-br.facebook.com/imobiliariadomos/" target="_blank"></a>
                        <a className="palavra-b" href="https://www.instagram.com/imobiliariadomos/?hl=pt-br" target="_blank"></a>
                    
                    <br/> <br/>
                    </div>         
                </div>

            </footer>
        </div>
    );
}