import React, { Component } from 'react';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

//ATOMS
import Ditem from "../atoms/dropdown-item";
import Dbutton from "../atoms/dropdown-button";

class Ndropdown extends Component {
  constructor(){
    super();
    this.state = {
      dropdown: null,
    };
  }

  handleDropdown = (event) => {
    this.setState({dropdown: event.currentTarget});
  };

  handleClose = () => {
    this.setState({dropdown: null});
  };

  render(){
    const open = Boolean(this.state.dropdown);
    const id = open ? 'simple-popover' : undefined;

    return(
      <ul className="navbar-nav ml-auto pr-5">
        <li className="nav-item dropdown">
          <Dbutton name={this.props.name} handleDropdown={this.handleDropdown}/>
          <Popover style={{zIndex: 99999}} id={id} open={open} anchorEl={this.state.dropdown} onClose={this.handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }} transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
            <List component="nav" aria-label="contacts">
              <Ditem tittle={"Perfil"} href={"/profile"} type={"profile"}/>
              <Divider/>
              <Ditem tittle={"Cerrar Sesión"} href={"/users/logout"} type={"logout"}/>
            </List>
          </Popover>
        </li>
      </ul>
    )
  }
}

export default Ndropdown;
