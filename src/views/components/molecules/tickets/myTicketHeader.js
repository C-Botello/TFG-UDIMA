import React, { Component } from 'react';

//ATOMS
import MTuser from '../../atoms/tickets/myTicketUser';
import MTdate from '../../atoms/tickets/myTicketDate';
import MTissue from '../../atoms/tickets/myTicketIssue';

class MTheader extends Component {

  render() {

    return (
      <div className="card-header my-n2">
        <div className="row">
          <MTuser user={this.props.myTicket.user} clearMyTicket={this.props.clearMyTicket}/>
          <MTdate date={this.props.myTicket.date}/>
        </div>
        <div className="row mb-n3">
          <MTissue issue={this.props.myTicket.issue}/>
      </div>
    </div>
    );
  }
}

export default MTheader;
