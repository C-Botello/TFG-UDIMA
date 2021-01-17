import React, { Component } from "react";
import { Popup } from "react-map-gl";

//ATOMS
import Theader from '../../atoms/map/TooltipHeader';
import Tbody from '../../atoms/map/TooltipBody';

class Tooltip extends Component {

  render() {
    const handleString = /\B(?=(\d{3})+(?!\d))/g;

    return (
      <Popup tipSize={0} longitude={this.props.elements.coordinates.longitude} latitude={this.props.elements.coordinates.latitude} closeButton={false}>
        <div className="popup">
          <Theader name={this.props.elements.name} flag={this.props.elements.flag}/>
          <Tbody fields={this.props.fields} elements={this.props.elements}/>
        </div>
      </Popup>
    );
  }
}

export default Tooltip;
