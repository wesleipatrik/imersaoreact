import React from 'react';

function ButtonLink(props) { //Componente com letra maiúscula
    // props = {className: propriedade, href: ""}
    console.log(props);
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;