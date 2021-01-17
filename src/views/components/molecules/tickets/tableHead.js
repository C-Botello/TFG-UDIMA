import React, { Component } from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

class Thead extends Component {

  render() {
    return (
      <TableHead>
        <TableRow>
          {
            this.props.rol == "Usuario"? (
              <TableCell></TableCell>
            ):(null)
          }
         <TableCell>Asunto</TableCell>
         {
           this.props.rol != "Usuario"? (
             <TableCell>Autor</TableCell>)
             :(<TableCell>Especialidad</TableCell>)
         }
         <TableCell>Fecha</TableCell>
         <TableCell></TableCell>
         <TableCell></TableCell>
        </TableRow>
      </TableHead>
    );
  }
}

export default Thead;
