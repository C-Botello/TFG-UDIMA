import React, { Component } from 'react';

//MOLECULES
import Hbody from '../../molecules/tickets/headerBody';
import Htrigger from '../../molecules/tickets/headerTrigger';
import HSearch from '../../molecules/tickets/headerSearch';

class Header extends Component {

  render() {
    return (
      <div>
        <Hbody myTicket={this.props.myTicket}/>
        <div className="card-body">
          <div className="mb-n3">
            <div className="row mt-n1 mb-1">
              <div className="col-4"><Htrigger toggle={this.props.toggle}/></div>
              <div className="col-8"><HSearch search={this.props.search} handleChange={this.props.handleChange} handleFilter={this.props.handleFilter}/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
