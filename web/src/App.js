import React from 'react';
import Menu from './meuSite/navbar/menu';
import Form from './meuSite/formulario/form';
import Carousel from './meuSite/carousel/carousel';
import Rodape from './meuSite/rodape/rodape';


function App() { // • Sempre tem que estar dentro de uma "div" se tiver mais de um componente.
  return (
    <div>

      <Menu />

      <Form />

      <br/>
      <br/>
      <Rodape />
     

    </div>
  );
}

export default App;