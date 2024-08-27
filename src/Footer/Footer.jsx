import React from 'react';
import css from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logoCenariar from '../assets/logo_cenariar_fundo_branco-.png';

function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.desenvolvedores}>
                <div className={css['footer-secao']}>
                    <img src={logoCenariar} alt="Logo Cenariar" className={css.logo} />
                </div>
                <div className={css['div-contato']}>
                    <h3 className={css['centralizado']}>Contato</h3>
                    <p><i className="fas fa-phone"></i> +55 34 99664-6441</p>
                </div>
                <div>
                    <h3 className={css['centralizado']}>Redes sociais</h3>
                    <div className={css['social-icons']}>
                        <a href="https://www.facebook.com/profile.php?id=61557559003256">
                            <i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/casacenariar/">
                            <i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
