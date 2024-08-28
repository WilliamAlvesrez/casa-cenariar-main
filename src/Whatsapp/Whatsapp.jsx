import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/logo_cenariar_fundo_preto-.png';

export default function Whatsapp() {

    return (
        <FloatingWhatsApp phoneNumber='+5534988240352'
            accountName='Como posso ajudá-lo?'
            chatMessage='Seja bem-vindo ao espaço Cenariar. Informe a sua mensagem abaixo:'
            statusMessage=''
            placeholder='Digite a sua mensagem'
            allowClickAway={true}
            allowEsc={true} 
            avatar={logo}
            />
    )
}