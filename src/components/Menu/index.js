import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';


function Menu() { //Componente com letra maiúscula
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Weslix Logo"/>            
            </a>

            <Button as="a" className="ButtonLink" href="/">
                New Vid
            </Button>
        </nav>
    );
}

export default Menu;