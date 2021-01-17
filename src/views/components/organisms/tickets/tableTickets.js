import React, { Component, useState } from 'react';
import { Paper, Table, TableContainer, TablePagination, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { esES } from '@material-ui/core/locale';

//ICONS
import { BsInboxFill } from "react-icons/bs";

//MOLECULES
import Thead from '../../molecules/tickets/tableHead';
import Tbody from '../../molecules/tickets/tableBody';

//REQUIRES
const moment = require('moment');

export default function TableTickets(props) {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState(0);
  let tickets = [];

  // AJUSTAR EL TEMA AL ESPAÑOL
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#1976d2' },
    },
  }, esES);

  // PERMITE CAMBIAR DE PÁGINA
  const handleChangePage = (e, newPage) => {
    props.setPage(newPage);
  };

  // CAMBIA EL NÚMERO DE COLUMNAS POR PÁGINA
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  // RECOGE LOS TICKETS DEPENDIENDO DE SI ES USUARIO O ESPECIALISTA
  const setTickets = () => {
    props.user.rol == "Usuario"?(
      props.tickets.map(ticket => props.user._id == ticket.idUser? (
        tickets = [...tickets, ticket]
      ):null)
    )
    :(
      props.tickets.map(ticket => props.user.rol == ticket.speciality? (
        ticket.status == 1?(tickets = [...tickets, ticket]): null
      ): null)
    )
  };

    setTickets();

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        {
          tickets.length != 0?(
            <TableContainer className="table-container">
              <Table>
                <Thead rol={props.user.rol}/>
                <Tbody rol={props.user.rol} page={props.page} rowsPerPage={rowsPerPage} tickets={tickets} replies={props.replies} id={props.id} handleTicketStatus={props.handleTicketStatus}/>
              </Table>
            </TableContainer>
          ):(<div><BsInboxFill size={100} className="mb-n4 noTickets"/><h6 className="my-4 text-secondary">No se han encontrado Tickets</h6></div>)
        }
        <TablePagination className="h-10" rowsPerPageOptions={[10, 25, 100]} component="div" count={tickets.length} rowsPerPage={rowsPerPage} page={props.page} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage}/>
      </Paper>
    </ThemeProvider>
  );
}
