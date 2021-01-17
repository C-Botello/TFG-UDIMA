import React, { Component } from 'react';
import { MdEdit } from "react-icons/md";

//MOLECULES
import Bitem from '../../molecules/profile/bodyItem';
import Bconfirm from '../../molecules/profile/bodyConfirm';

//REQUIRES
const moment = require('moment');

class Pbody extends Component {
  constructor(){
    super();
    this.state = {
      user: [],
      confirm: null,
    };
  }

  // EJECUTAR NADA MÁS RENDERIZAR LA VISTA
  componentDidMount = () => {
    this.currentUser();
  }

  // OBTENER USUARIO ACTUAL
  currentUser() {
    fetch('/users/user')
     .then(res => res.json())
     .then(data => {
        this.setState({user: data});
      });
  }

  // ABRIR POPOVER
  handleConfirm = (event) => {
    this.setState({confirm: event.currentTarget});
  }

  // CERRAR POPOVER
  handleCloseConfirm = () => {
    this.setState({confirm: null});
  }

  // CERRAR CUENTA DE USUARIO
  closeAccount = () => {
    fetch(`/users/delete/${this.state.user._id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(
      window.location.href = '/?delete'
    )
  }

  // EDITAR CUENTA DE USUARIO
  editAccount = async (id) => {
    fetch(`/tickets/ticket/${id}`, {
      method: 'PUT',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      //this.setState({status: data});
    })
  }

  render() {
    const open = Boolean(this.state.confirm);
    const id = open ? 'simple-popover' : undefined;

    return (
      <div className="card-body">
        <Bitem tittle={"Nombre:"} value={this.state.user.name} edit="true"/>
        <Bitem tittle={"Correo:"} value={this.state.user.email} edit="true"/>
        <Bitem tittle={"Especialidad:"} value={this.state.user.rol == "Usuario"? "Ninguna": this.state.user.rol} edit="true"/>
        <Bitem tittle={"Fecha de Registro:"} value={moment(this.state.user.date).format('DD/MM/YYYY')}/>
        <Bconfirm id={id} open={open} confirm={this.state.confirm} handleConfirm={this.handleConfirm} handleCloseConfirm={this.handleCloseConfirm} closeAccount={this.closeAccount}/>
      </div>
    );
  }
}

export default Pbody;
