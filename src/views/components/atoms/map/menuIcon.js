import React, { Component } from "react";

class Micon extends Component {

  render() {
    return (
      <div className={`menu-icon ${ this.props.query === this.props.field ? "menu-icon-active" : "" }`} style={{ backgroundColor: this.props.colors[this.props.index] }}/>
    );
  }
}

export default Micon;
