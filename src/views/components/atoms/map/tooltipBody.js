import React, { Component } from "react";

class Tbody extends Component {

  render() {
    const handleString = /\B(?=(\d{3})+(?!\d))/g;

    return (
          <div className="mt-1 mb-n2 ml-2 text-left">
            {
              this.props.fields.map((field, index) => (
                <div className="popup-field" key={index}>
                  <div className="popup-label">{field}:</div>
                  <div className="popup-value">{ this.props.elements[field].toString().replace(handleString, ",") }</div>
                </div>
              ))
            }
          </div>
    );
  }
}

export default Tbody;
