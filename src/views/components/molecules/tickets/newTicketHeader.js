import React, { Component } from 'react';
import { ModalHeader } from "reactstrap";

class NTheader extends Component {

  render() {
    return (
      <ModalHeader toggle={this.props.toggle}>
        Nuevo Ticket
      </ModalHeader>
    );
  }
}

export default NTheader;
