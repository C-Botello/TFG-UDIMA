import React from 'react';
import { Grid, Button, ButtonGroup, Zoom } from '@material-ui/core/';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';

//ICONS
import { RiFilter3Fill } from "react-icons/ri";

const FilterButton = styled(Button)`
&& {
  border-color: #5bc0de;
  color: #5bc0de;
  height: 40px;
}
`;

const FilterText = styled(Button)`
&& {
  border-color: #cccccc;
  border-left-color: #5bc0de;
  color: #595959;
  height: 40px;
}
`;

export default function HbuttonGroup(props) {

  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group" ref={props.anchorRef}>
      <Tooltip title="Filtrar" placement="top" TransitionComponent={Zoom} enterDelay={350} leaveDelay={200} arrow>
        <FilterButton size="small" aria-controls={props.open ? 'split-button-menu' : undefined} aria-expanded={props.open ? 'true' : undefined} aria-label="select merge strategy" aria-haspopup="menu" onClick={props.handleToggle}>
          <RiFilter3Fill size="20px"/>
        </FilterButton>
      </Tooltip>
      <FilterText disabled name="filter">{props.options[props.selectedIndex]}</FilterText>
    </ButtonGroup>
  );
}
