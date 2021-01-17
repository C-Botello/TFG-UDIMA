import React, { Component } from 'react';

//REQUIRES
const moment = require('moment');

class Rdate extends Component {

  render() {
    return (
      <div className="row mt-n3">
        <div className="col font-weight-lighter text-right text-sm">{moment(this.props.date).format('DD/MM/YYYY - hh:mm:ss')}</div>
      </div>
    );
  }
}

export default Rdate;
