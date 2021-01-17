import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//ICONS
import { BiUser, BiLogOut } from "react-icons/bi";

class Ditem extends Component {

  goTo = () => {
    window.location.href = this.props.href;
  }

  render(){
    return(
      <div>
        <ListItem button onClick={this.goTo}>
          <ListItemIcon>
            {this.props.type == "logout"? <BiLogOut/>: <BiUser />}
          </ListItemIcon>
          <ListItemText primary={this.props.tittle} />
        </ListItem>
      </div>
    )
  }
}

export default Ditem;
