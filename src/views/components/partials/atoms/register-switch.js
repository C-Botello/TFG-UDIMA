import React, { Component } from 'react';
import { withStyles, Switch } from '@material-ui/core/';

const StyledSwitch = withStyles({
  switchBase: {
    '&$checked': {
      color: "#5bc0de",
    },
    '&$checked + $track': {
      backgroundColor: "#5bc0de",
    },
  },
  checked: {},
  track: {},
})(Switch);

class Rswitch extends Component {

  render(){
    return(
      <div className="row mx-auto mt-n3 mb-1">
        <h6  className="col my-auto align-right mr-n2 pl-4">Usuario</h6>
        <StyledSwitch  className="col ml-n1" checked={this.props.checkedSwitch} onChange={this.props.handleChecked} name="checkedSwitch"/>
        <h6 className="col my-auto ml-n3">Especialista</h6>
      </div>
    )
  }
}

export default Rswitch;
