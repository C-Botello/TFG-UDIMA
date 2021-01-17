import React, { Component } from "react";

//ATOMS
import Micon from '../../atoms/map/menuIcon';
import Mlabel from '../../atoms/map/menuLabel';

class Mfield extends Component {

  render() {
    return (
      <div className="menu-field" key={this.props.index} onClick={this.props.setMenu.bind(this, this.props.field)}>
        <Micon query={this.props.query} field={this.props.field} colors={this.props.colors} index={this.props.index}/>
        <Mlabel query={this.props.query} field={this.props.field}/>
      </div>
    );
  }
}

export default Mfield;
