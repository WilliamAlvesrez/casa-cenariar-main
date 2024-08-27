import { useState } from 'react';
import emailjs from 'emailjs-com';
import css from './Secao_Form.module.css';

function Secao_Form() {
    const [form, setForm] = useState({
		nome: '',
		email: ''
	})

	// function getData(e) {
	function getData(e) {
		//console.log(e.target.value)
		//form[e.target.name] = e.target.value;

		setForm({ ...form, [e.target.name]: e.target.value })
		console.log(form);
	}

	function validar() {
		if (form.nome === '' || form.phone === '' || form.email ===  '')
			alert('Todos os campos precisam ser preenchidos');
		else {
			var templateParams = {
				from_name: form.nome,
				from_phone: form.phone,
				from_email: form.email,
				
			};
			emailjs.send("service_jypz835",
				"template_t2cq9vm",
				templateParams,
				"RiFNBPXlCkkaWPFs_").then(
					(response) => {
						console.log('SUCCESS!', response.status, response.text);
					},
					(error) => {
						console.log('FAILED...', error)
					});

		}
	}


	return (
		<section className={css.FaleConosco}>

			<h2>Fale Conosco</h2>

			<form className={css.form} >

				<input type="text" name="nome" placeholder='Digite seu nome' onChange={getData} />
				<input type="text" name="phone" placeholder='Telefone' onChange={getData} />
				<input type="email" name="email" placeholder='E-mail' onChange={getData} />
				<input type="button" value="Enviar" onClick={validar} />
			</form>
		</section>
	)
}

export default Secao_Form;