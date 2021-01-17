import React, { Component } from "react";

class Theader extends Component {

  render() {
    return (
      <div className="popup-field">
        <div className="popup-flag" style={{ backgroundImage: `url(${this.props.flag})` }}/>
        <div className="popup-header">{this.props.name}</div>
      </div>
    );
  }
}

export default Theader;
