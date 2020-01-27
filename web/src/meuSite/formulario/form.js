import React from 'react';
import './form.css';
// import {Container} from './style'

export default function Form(){
    return(
        <div className="formulario">
            <form>
                <label className="escrita"> Nome: </label> <br/>
                <input type="text" name="nome"></input> <br/>
                <label className="escrita"> E-mail: </label> <br/>
                <input type="text" name="email"></input> <br/>
                <label className="escrita"> Feedback: </label> <br/>
                <input type="text" name="feedback"></input> <br/>
                <br/>
                <br/>
                <input type="submit" value="Enviar"></input>
            </form>
        </div>
    );
}