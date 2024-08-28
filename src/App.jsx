import React from 'react';
import Secao_DuvidasFrequentes from './Secao_DuvidasFrequentes/Secao_DuvidasFrequentes';
import Footer from './Footer/Footer';
import Secao_FaleConosco from './Secao_Form/Secao_FaleConosco';
import Whatsapp from './Whatsapp/Whatsapp';

function App() {
  return (
    <>
      <Whatsapp />
      <Secao_DuvidasFrequentes />
      <Secao_FaleConosco />
      <Footer />
    </>
  );
}

export default App;
