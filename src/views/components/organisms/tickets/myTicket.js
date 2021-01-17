import React, { Component } from 'react';

//MOLECULES
import MTheader from '../../molecules/tickets/myTicketHeader';
import MTbody from '../../molecules/tickets/myTicketBody';

class MyTicket extends Component {

  render() {

    return (
      <div className="card text-left mt-4 border-dark border-0 box-shadow">
        <MTheader myTicket={this.props.myTicket} clearMyTicket={this.props.clearMyTicket}/>
        <MTbody myTicket={this.props.myTicket}/>
      </div>
    );
  }
}

export default MyTicket;
