import React, {useState} from 'react';

export default function CompC(){

    let [counter, useCounter] = useState(0)

    function Inc(){
        useCounter(counter + 1)
    };

    return(
        <div>
            <h1> Contador: {counter} </h1>
            <button onClick = {Inc}> Incrementar... </button>
        </div>
    );
}