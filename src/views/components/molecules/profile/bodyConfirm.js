import React, { Component } from "react";

//ATOMS
import BconfirmButton from '../../atoms/profile/bodyConfirmButton';
import BconfirmPopover from '../../atoms/profile/bodyConfirmPopover';

class Bconfirm extends Component {

  render() {
    return (
      <div className="justify-align-center">
        <BconfirmButton handleConfirm={this.props.handleConfirm}/>
        <BconfirmPopover id={this.props.id} open={this.props.open} confirm={this.props.confirm} handleCloseConfirm={this.props.handleCloseConfirm} closeAccount={this.props.closeAccount}/>
      </div>
    );
  }
}

export default Bconfirm;
