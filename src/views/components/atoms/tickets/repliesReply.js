import React, { Component } from 'react';

class Rreply extends Component {

  render() {
    return (
      <div className="row px-4 mt-n1 mb-n3">
        <p className="font-weight-light">{ this.props.reply }</p>
      </div>
    );
  }
}

export default Rreply;
