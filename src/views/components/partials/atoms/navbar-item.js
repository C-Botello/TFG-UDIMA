import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { FaHome } from "react-icons/fa";

class Nitem extends Component {

  render(){
    return(
      <li>
        {this.props.type == "icon"?
          <Button className="nav-link active" style={{minWidth: '30px', minHeight: '30px'}} href="/"><FaHome size="22"/></Button>
        :
          <Button className="nav-link" href={this.props.href}>{this.props.tittle}</Button>}
      </li>
    )
  }
}

export default Nitem;
