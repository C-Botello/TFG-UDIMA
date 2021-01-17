import React, { Component } from "react";

//ATOMS
import TotalsLabelData from '../../atoms/map/totalsLabelData';

class TotalsLabelDataSet extends Component {

  render() {

    return (
      <div>
        <div className="row mx-auto mb-n1 total-label">
          <TotalsLabelData type={"warning"} data={this.props.totalConfirmed}/>
          <TotalsLabelData type={"danger"} data={this.props.totalDeaths}/>
          <TotalsLabelData type={"success"} data={this.props.totalRecovered}/>
        </div>
      </div>
    );
  }
}

export default TotalsLabelDataSet;
