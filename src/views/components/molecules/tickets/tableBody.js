import React, { Component } from 'react';
import { Zoom } from '@material-ui/core/';

//ICONS
import { TableBody, TableRow } from '@material-ui/core';
import { FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

//ATOMS
import Trow from '../../atoms/tickets/tableRow';
import Tstatus from '../../atoms/tickets/tableStatus';

//REQUIRES
const moment = require('moment');

export default function Tbody(props) {

    return (
      <TableBody>
        {
          props.tickets.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map(ticket =>(
            <Zoom in={true} style={{ transitionDelay: '150ms' }}>
              <TableRow key={ticket._id} className={ticket._id == props.id? "myTicket" : ticket.status === 1? "ticket-open":"ticket-close"}>
                {
                  props.rol == "Usuario"? (
                    <Tstatus status={ticket.status} handleTicketStatus={props.handleTicketStatus} id={ticket._id}/>
                  ):(null)
                }
                <Trow replies={props.replies} id={ticket._id} tittle={ticket.issue} size="55%"/>
                  {
                    props.rol != "Usuario"? (
                      <Trow replies={props.replies} id={ticket._id} tittle={ticket.user} size="35%"/>)
                      :(<Trow replies={props.replies} id={ticket._id} tittle={ticket.speciality} size="35%"/>)
                  }
                <Trow replies={props.replies} id={ticket._id} tittle={moment(ticket.date).format('DD/MM/YYYY')} size="10%"/>
                <Trow replies={props.replies} id={ticket._id} tittle={<h5><span className="badge badge-primary float-right mr-n2 mt-1">{ ""} className="sticky2" size="1%"/>
                <Trow replies={props.replies} id={ticket._id} tittle={ticket._id == props.id? <FaAngleDoubleRight className="arrow-myTicket mt-n1"/>:<FaAngleRight className="arrow mt-n1"/> }  className="sticky" size="1%"/>
              </TableRow>
            </Zoom>
          ))
        }
      </TableBody>
    );
}
