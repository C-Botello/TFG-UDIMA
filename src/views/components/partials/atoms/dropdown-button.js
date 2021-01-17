import React, { Component } from 'react';

class Dbutton extends Component {

  render(){
    return(
      <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" onClick={this.props.handleDropdown} aria-haspopup="true" aria-expanded="false">
        {this.props.name}
      </a>
    )
  }
}

export default Dbutton;
