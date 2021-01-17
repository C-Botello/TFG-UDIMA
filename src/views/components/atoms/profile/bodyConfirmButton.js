import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width:200px;
  transition: all 1.0s ease;
  -webkit-transition: all 1.0s ease;
  -o-transition: all 1.0s ease;
  -moz-transition: all 1.0s ease;
  -ms-transition: all 1.0s ease;
  &:hover {
    border: 2px solid #d9534f;
    color: #d9534f;
    width: 100%;
  }
  &:active {
    border: 2px solid #d9534f;
    color: white;
    background-color: #d9534f;
  }
`;

class Bvalue extends Component {

  render() {
    return (
      <StyledButton variant="outlined" onClick={this.props.handleConfirm}>Cerrar Cuenta</StyledButton>
    );
  }
}

export default Bvalue;
