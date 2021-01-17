import React, { Component } from "react";
import Popover from '@material-ui/core/Popover';

class Bconfirm extends Component {

  render() {
    return (
      <Popover id={this.props.id} open={this.props.open} anchorEl={this.props.confirm} onClose={this.props.handleCloseConfirm} style={{minWidth:"1500px", maxWidth:"1500px"}} anchorOrigin={{ vertical: 'top', horizontal: 'center', }} transformOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
        <div className="p-4">
          <div className="row mb-4">Tu cuenta quedará eliminada para siempre ¿Estás seguro?</div>
            <div className="row justify-content-between mx-3">
              <button className="col btn btn-outline-secondary" style={{minWidth:"50px", maxWidth:"50px"}} onClick={this.props.handleCloseConfirm}>NO</button>
              <button className="col btn btn-danger text-white" style={{minWidth:"50px", maxWidth:"50px"}} onClick={this.props.closeAccount}>SI</button>
            </div>
        </div>
      </Popover>
    );
  }
}

export default Bconfirm;
