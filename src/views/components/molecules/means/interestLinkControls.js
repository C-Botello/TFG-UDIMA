import React from 'react';

//ATOMS
import InterestLinkButton from '../../atoms/means/interestLinkButton';

export default function InterestLinkControls(props) {
  return (
    <div className={props.className}>
      <InterestLinkButton title={"Abrir en una nueva pestaña"} href={props.href} type="newTab"/>
      <InterestLinkButton title={"Copiar enlace al portapapeles"} href={props.href}/>
    </div>
  );
}
