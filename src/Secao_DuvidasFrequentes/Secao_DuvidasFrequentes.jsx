import { useEffect, useState } from 'react';
import css from './Secao_DuvidasFrequentes.module.css';

function Secao_DuvidasFrequentes() {
  const [duvidasFrequentes, setDuvidasFrequentes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // Estado para controlar qual índice de FAQ está atualmente ativo (expandido).

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/WilliamAlvesrez/casa-cenariar-main/main/src/Secao_DuvidasFrequentes/DuvidasFrequentes.json')
      .then(response => response.json())
      .then(info => setDuvidasFrequentes(info.duvidasFrequentes))
      .catch(error => console.error('Erro ao carregar as FAQs:', error));
  }, []);

  // Função para alternar o índice ativo. Se o índice clicado já estiver ativo, ele será desativado (definido como null).
// Caso contrário, o índice clicado será definido como o ativo.
  function handleToggle(index) {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  }

  function getPerguntas() {
    if (duvidasFrequentes.length > 0) {
      return (
        duvidasFrequentes.map((duvida, index) => (
          <div key={index} className={css.duvidaContainer}>
            <div
			// Adiciona a classe CSS 'pergunta' ao elemento e define um manipulador de clique que chama a função handleToggle com o índice atual.
// Exibe a pergunta da FAQ e um ícone de seta que muda de direção com base no estado ativo (expandido ou colapsado).
              className={css.pergunta}
              onClick={() => handleToggle(index)}
            >
              {duvida.pergunta}
              <span className={css.seta}>
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </div>
            {activeIndex === index && (
              <div className={css.resposta}>
                <p>{duvida.resposta}</p>
              </div>
            )}
          </div>
        ))
      );
    }
  }

  return (
    <section className={css.secaoDuvidasFrequentes}>
      <div className="container">
        <h2>Dúvidas Frequentes</h2>
        {getPerguntas()}
      </div>
    </section>
  );
}

export default Secao_DuvidasFrequentes;
