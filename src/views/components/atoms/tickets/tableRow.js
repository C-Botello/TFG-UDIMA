import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';

class Trow extends Component {

  render() {
    return (
        <TableCell style={{width: this.props.size}} onClick={() => this.props.replies(this.props.id)}>{this.props.tittle}</TableCell>
    );
  }
}

export default Trow;
