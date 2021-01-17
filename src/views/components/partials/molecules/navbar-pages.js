import React, { Component } from 'react';

//ATOMS
import Nitem from "../atoms/navbar-item";

class Npages extends Component {
  render(){
    return(
      <div>
        <ul className="navbar-nav mr-auto">
          <Nitem type={"icon"}/>
          <Nitem href={"/tickets"} tittle={"Tickets"}/>
          <Nitem href={"/means"} tittle={"Recursos"}/>
          <Nitem href={"/map"} tittle={"Mapa"}/>
        </ul>
      </div>
    )
  }
}

export default Npages;
