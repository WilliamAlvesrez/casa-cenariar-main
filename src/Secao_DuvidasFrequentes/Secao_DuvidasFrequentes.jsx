import { useEffect, useState } from 'react';
import css from './Secao_DuvidasFrequentes.module.css';

function Secao_DuvidasFrequentes() {

	const [duvidasFrequentes, setDuvidasFrequentes] = useState([]);

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/WilliamAlvesrez/casa-cenariar-main/main/src/Secao_DuvidasFrequentes/DuvidasFrequentes.json')
			.then(response => response.json())
			.then(info => setDuvidasFrequentes(info.duvidasFrequentes))
			.catch(error => console.error('Erro ao carregar as FAQs:', error));
	}, []);

	function getPerguntas() {
		if (duvidasFrequentes.length > 0) {
			return (
				duvidasFrequentes.map((duvida, index) => (
					<details key={index}>
						<summary>{duvida.pergunta}</summary>
						<p>{duvida.resposta}</p>
					</details>
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
