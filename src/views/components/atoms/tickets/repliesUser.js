import React, { Component } from 'react';

class Ruser extends Component {

  render() {
    return (
      <div className="row">
        <div className="col"><h6 className="text-left">{ this.props.user }</h6>{ this.props.rol !== "Usuario"?<p className="font-weight-lighter text-sm font-italic mt-n2" style={{margin: "7px 0px"}}>Especialista en { this.props.rol }</p>:""}</div>
      </div>
    );
  }
}

export default Ruser;
