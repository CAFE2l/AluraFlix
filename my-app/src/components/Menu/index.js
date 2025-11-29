import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu(){
   return (
    <nav className="Menu">
        <a href="/">
         <img class="Logo" src={Logo} alt='AluraFlix Logo'/>
        </a>

        <ButtonLink classNamse="ButtonLink" href="/">
            Novo Vídeo
        </ButtonLink>
    </nav>
   );

}

export default Menu;