import React, { Component } from "react";

class TotalsLabelField extends Component {

  render() {

    return (
      <div>
        {this.props.type == "warning"?
          (<h5 className="text-warning col text-right">{this.props.tittle}</h5>)
        : null}
        {this.props.type == "danger"?
          (<h5 className="text-danger col">{this.props.tittle}</h5>)
        : null}
        {this.props.type == "success"?
          (<h5 className="text-success col text-left">{this.props.tittle}</h5>)
        : null}
      </div>
    );
  }
}

export default TotalsLabelField;
