import React, { Component } from 'react';
import { ModalBody } from "reactstrap";

//ATOMS
import NTitem from '../../atoms/tickets/newTicketItem';

class NTbody extends Component {

  render() {
    return (
      <ModalBody>
        <NTitem type={"text"} name={"issue"} placeholder={"Asunto del problema"} value={this.props.issue} handleChange={this.props.handleChange}/>
        <NTitem name={"speciality"} value={this.props.speciality} handleChange={this.props.handleChange}/>
        <NTitem type={"textarea"} placeholder={"Descripción del problema"} name={"description"} value={this.props.description} handleChange={this.props.handleChange}/>
      </ModalBody>
    );
  }
}

export default NTbody;
