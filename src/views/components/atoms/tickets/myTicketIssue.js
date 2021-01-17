import React, { Component } from 'react';

class MTissue extends Component {

  render() {
    return (
      <div className="col text-center"><h6>{ this.props.issue }</h6></div>
    );
  }
}

export default MTissue;
