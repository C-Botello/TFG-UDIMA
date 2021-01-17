import React, { Component } from "react";

class Mlabel extends Component {

  render() {
    return (
        <div className={`menu-label ${ this.props.query === this.props.field ? "menu-label-active" : "" }`}>
          {this.props.field}
        </div>
    );
  }
}

export default Mlabel;
