import React from 'react';
import { ClickAwayListener, Paper, MenuItem, MenuList } from '@material-ui/core/';
import styled from 'styled-components';

export default function HmenuList(props) {

  return (
    <Paper>
      <ClickAwayListener onClickAway={props.handleClose}>
        <MenuList id="split-button-menu">
          {
            props.options.map((option, index) => (
              <MenuItem key={option} selected={index === props.selectedIndex} value={props.options[props.selectedIndex]} onClick={(event) => props.handleMenuItemClick(event, index)}>
                {option}
              </MenuItem>
            ))
          }
        </MenuList>
      </ClickAwayListener>
    </Paper>
  );
}
