import React, { Component } from 'react';
import { Modal } from "reactstrap";

//MOLECULES
import NTheader from '../../molecules/tickets/newTicketHeader';
import NTbody from '../../molecules/tickets/newTicketBody';
import NTfooter from '../../molecules/tickets/newTicketFooter';

//REQUIRES
const moment = require('moment');
const newTicketStyles = require('../../atoms/tickets/newTicketStyles');

class NewTicket extends Component {

  render() {
    return (
      <div>
        <Modal style={newTicketStyles} isOpen={this.props.modal} toggle={this.props.toggle}>
          <NTheader toggle={this.props.toggle}/>
          <form onSubmit={this.props.addTicket}>
            <NTbody issue={this.props.issue} speciality={this.props.speciality} description={this.props.description} handleChange={this.props.handleChange}/>
            <NTfooter toggle={this.props.toggle}/>
          </form>
        </Modal>
      </div>
    );
  }
}

export default NewTicket;
