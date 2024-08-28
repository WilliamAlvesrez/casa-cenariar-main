import React from 'react';
import Secao_Form from "./Secao_Form";
import css from './Secao_FaleConosco.module.css';

function Secao_FaleConosco() {
    return (
        <div className={css.contato}>
            <div className={css['contato-superior']}>
                <div className={css.detalhesContato}>
                    <h2>Fale Conosco!</h2>
                    <p>"Capture o momento perfeito com a gente! 📸✨ Quer saber mais sobre nossos serviços de locação de cenários para fotografia e como podemos transformar suas memórias em imagens inesquecíveis? Preencha o formulário entre em contato conosco. Estamos prontos para criar algo incrível para você!"</p>
                </div>
                <div className={css['secao-form']}>
                    <Secao_Form />
                </div>
            </div>
        </div>
    );
}

export default Secao_FaleConosco;
