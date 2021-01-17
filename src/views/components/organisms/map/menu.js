import React, { Component } from "react";

//MOLECULES
import Mfield from '../../molecules/map/menuField';

class Menu extends Component {

  render() {

    return (
      <div className="menu">
        {
          this.props.fields.map((field, index) => (
            <Mfield key={index} setMenu={this.props.setMenu} query={this.props.query} colors={this.props.colors} field={field} index={index}/>
          ))
        }
      </div>
    );
  }
}

export default Menu;
