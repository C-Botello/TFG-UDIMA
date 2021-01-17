import React, { Component } from 'react';
import { TableCell, Tooltip, Zoom } from '@material-ui/core/';

//ICONS
import { BsFillLockFill, BsFillUnlockFill } from "react-icons/bs";

class Tstatus extends Component {

  render() {
    return (
        <TableCell scope="row" className={this.props.status === 1? "text-success":"text-secondary"} style={{width: "1%"}}>
          <Tooltip title={this.props.status === 1? "Cerrar Ticket": "Abrir Ticket"} placement="left-start" TransitionComponent={Zoom} enterDelay={350} leaveDelay={200} arrow>
            <button className={this.props.status === 1? "btn btn-outline-info btn-sm my-n2":"btn btn-outline-danger btn-sm my-n2"} onClick={() => this.props.handleTicketStatus(this.props.id)}>
              {this.props.status === 1?
                <BsFillUnlockFill/>
                :
                  <BsFillLockFill/>}
            </button>
          </Tooltip>
        </TableCell>
    );
  }
}

export default Tstatus;
