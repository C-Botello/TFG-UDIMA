import React, { Component } from 'react';

//ATOMS
import HfreeSpace from '../../atoms/tickets/headerFreeSpace';
import Htittle from '../../atoms/tickets/headerTittle';

class Hbody extends Component {

  render() {

    return (
      <div>
        <div className="card-header my-n2">
        <div className="row">
          <HfreeSpace/>
          <HfreeSpace/>
        </div>
        <div className="row mb-n3">
          <Htittle/>
        </div>
      </div>
    </div>
    );
  }
}

export default Hbody;
