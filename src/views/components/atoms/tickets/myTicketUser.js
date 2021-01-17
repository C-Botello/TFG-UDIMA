import React, { Component } from 'react';

//ICONS
import { FaAngleLeft } from "react-icons/fa";

class MTuser extends Component {

  render() {
    return (
      <div>
        <div className="col mx-n2 text-left"><FaAngleLeft size={22} className="ml-n2 mr-2 arrow" onClick={this.props.clearMyTicket}/>{this.props.user}</div>
      </div>
    );
  }
}

export default MTuser;
