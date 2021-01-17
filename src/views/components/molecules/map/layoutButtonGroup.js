import React from "react";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import styled from 'styled-components';

const StyledButton = styled(ToggleButton)`
  &.MuiToggleButton-root {
    &.Mui-selected {
      opacity:1;
      text-transform: none;
    }
  }

  && {
    border: 0px;
    color: white;
    background-color: black;
    opacity:0.6;
    font-size: 15px;
    height: 30px;
    z-index: 1;
    text-transform: none;
  }
`;

export default function LbuttonGroup(props) {

  return (
    <div>
      <ToggleButtonGroup value={props.selected} exclusive onChange={props.handleSelected} variant="contained">
        {
          props.names.map((name, index) => {
            const url = props.urls[index];
            return (
              <StyledButton key={name} value={name} onClick={() => props.setLayout(url)}>{name}</StyledButton>
            )
          })
        }
      </ToggleButtonGroup>
    </div>
  );
}
