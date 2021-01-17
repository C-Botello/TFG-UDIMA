import React, { Component } from "react";

//MOLECULES
import TotalsLabelFields from "../../molecules/map/totalsLabelFields";
import TotalsLabelDataSet from "../../molecules/map/totalsLabelDataSet";

class TotalsLabel extends Component {

  render() {

    return (
      <div className="card-header mb-n2">
        <TotalsLabelFields/>
        <TotalsLabelDataSet totalConfirmed={this.props.totalConfirmed} totalDeaths={this.props.totalDeaths} totalRecovered={this.props.totalRecovered}/>
      </div>
    );
  }
}

export default TotalsLabel;
