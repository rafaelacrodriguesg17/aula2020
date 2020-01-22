import React from 'react';

export default function CompB(props){
    return(
        <div>
            <h1> Olá {props.nome} {props.sobrenome}, tudo bem com você?</h1>
        </div>
        
    );
}