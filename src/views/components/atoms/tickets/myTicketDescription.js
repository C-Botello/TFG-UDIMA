import React, { Component } from 'react';

class MTdescription extends Component {

  render() {
    return (
        <div className="row ml-1"><p>{ this.props.description }</p></div>
    );
  }
}

export default MTdescription;
