import React from 'react';

import CompA from './componentes/CompA'
import CompB from './componentes/Props';
import CompC from './componentes/State';

function App() { // • Sempre tem que estar dentro de uma "div" se tiver mais de um componente.
  return (
    <div>
      < CompA />
      < CompB nome = "Rafaela" sobrenome = "Gonçalves" />
      <CompC />
    </div>
  );
}

export default App;