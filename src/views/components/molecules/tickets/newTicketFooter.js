import React, { Component } from 'react';
import { Button, ModalFooter } from "reactstrap";

class NTfooter extends Component {

  render() {
    return (
      <ModalFooter>
          <Button onClick={this.props.toggle} className="btn btn-secondary">Cerrar</Button>
          <Button type="submit" className="btn btn-success">Crear</Button>
      </ModalFooter>
    );
  }
}

export default NTfooter;
