import React from 'react';
import { Grid, Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, TextField } from '@material-ui/core/';
import styled from 'styled-components';

//ATOMS
import HmenuList from '../../atoms/tickets/headerMenuList';
import HsearchBar from '../../atoms/tickets/headerSearchBar';
import HbuttonGroup from '../../atoms/tickets/headerButtonGroup';

const options = ['Asunto', 'Propietario', 'Especialidad', 'Fecha'];

export default function HSearch(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // SELECCIONA LA OPCIÓN DEL MENÚ EMERGENTE
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    props.handleFilter(event);
    setOpen(false);
  };

  // CAMBIA EL ESTADO BASANDOSE EN EL ESTADO ANTERIOR
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // CIERRA EL MENÚ EMERGENTE
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
  <div className="row float-right">
    <div className="col">
      <Grid container direction="column" alignItems="flex-end">
        <Grid item xs={12}>
          <HbuttonGroup anchorRef={anchorRef} options={options} selectedIndex={selectedIndex} open={open} handleToggle={handleToggle}/>
          <Popper className="topIndex" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {
              ({ TransitionProps, placement }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', }}>
                  <HmenuList options={options} selectedIndex={selectedIndex} handleClose={handleClose} handleMenuItemClick={handleMenuItemClick}/>
                </Grow>
              )
            }
          </Popper>
        </Grid>
      </Grid>
    </div>
    <HsearchBar search={props.search} handleChange={props.handleChange}/>
  </div>
  );
}
