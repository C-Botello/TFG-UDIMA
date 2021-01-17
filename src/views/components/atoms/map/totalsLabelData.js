import React, { Component } from "react";

class TotalsLabelData extends Component {

  render() {

    return (
      <div>
        {this.props.type == "warning"?
          (<h1 className="text-warning col fw-bolder text-right">{this.props.data}</h1>)
        : null}
        {this.props.type == "danger"?
          (<h1 className="text-danger col">{this.props.data}</h1>)
        : null}
        {this.props.type == "success"?
          (<h1 className="text-success col text-left">{this.props.data}</h1>)
        : null}
      </div>
    );
  }
}

export default TotalsLabelData;
