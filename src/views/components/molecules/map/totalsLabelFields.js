import React, { Component } from "react";

//ATOMS
import TotalsLabelField from '../../atoms/map/totalsLabelField';

class TotalsLabelFields extends Component {

  render() {

    return (
      <div>
        <div className="row mx-auto mb-n2">
          <TotalsLabelField type={"warning"} tittle={"Confirmados"}/>
          <TotalsLabelField type={"danger"} tittle={"Muertos"}/>
          <TotalsLabelField type={"success"} tittle={"Curados"}/>
        </div>
      </div>
    );
  }
}

export default TotalsLabelFields;
