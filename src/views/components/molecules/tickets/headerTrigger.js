import React, { Component } from 'react';

//ATOMS
import HtriggerTittle from '../../atoms/tickets/headerTriggerTittle';

class Htrigger extends Component {

  render() {
    return (
        <button type="button" className="btn btn-outline-info float-left ml-n3 mr-n4" style={{height: "40px"}}  onClick={this.props.toggle}>
          <HtriggerTittle/>
        </button>
    );
  }
}

export default Htrigger;
