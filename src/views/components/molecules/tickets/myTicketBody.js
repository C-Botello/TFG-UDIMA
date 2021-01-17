import React, { Component } from 'react';

//ATOMS
import MTdescription from '../../atoms/tickets/myTicketDescription';
import MTid from '../../atoms/tickets/myTicketId';

class MTBody extends Component {

  render() {

    return (
      <div className="card-body">
        <MTdescription description={this.props.myTicket.description}/>
        <MTid id={this.props.myTicket._id}/>
      </div>
    );
  }
}

export default MTBody;
