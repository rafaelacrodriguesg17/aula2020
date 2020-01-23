import React from 'react';

import CompA from './componentes/CompA'
import CompB from './componentes/Props';
import CompC from './componentes/State';
import Form from './componentes/formulario/form';
import Menu from './componentes/navbar/menu';

function App() { // • Sempre tem que estar dentro de uma "div" se tiver mais de um componente.
  return (
    <div>
      < Form />
      < CompA />
      < CompB nome = "Rafaela" sobrenome = "Gonçalves" />
      <CompC />

      <hr/>
      <hr/>
      <hr/>

      <Menu/>
    </div>
  );
}

export default App;