import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
&& {
  minWidth: 15px;
  maxWidth: 20px;
  height: 10px;
}
`;

class Bedit extends Component {

  render() {
    return (
      <Button style={{minWidth: "20px", maxWidth: "20px", minHeight: "20px", maxHeight: "20px"}} className="ml-1">{this.props.icon}</Button>
    );
  }
}

export default Bedit;
