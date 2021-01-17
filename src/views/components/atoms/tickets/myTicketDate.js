import React, { Component } from 'react';

//REQUIRES
const moment = require('moment');

class MTdate extends Component {

  render() {
    return (
        <div className="col-5 mx-n3 font-weight-lighter text-right">{moment(this.props.date).format('DD/MM/YYYY')}</div>
    );
  }
}

export default MTdate;
