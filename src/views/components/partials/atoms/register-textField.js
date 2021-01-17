import React, { Component } from 'react';
import { TextField } from '@material-ui/core/';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  .MuiFormLabel-root{
    &.Mui-focused {
      color: #5bc0de;
    }
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #5bc0de;
    }
  }
`;

class RtextField extends Component {
  render(){
    return(

      <div className="form-group mb-n1">

        {
          this.props.autoFocus==true?

            <StyledTextField label={this.props.label} margin="dense" variant="outlined" type={this.props.type} name={this.props.name} onChange={this.props.handleChange} value={this.props.value} className="form-control" autoFocus/>
          :
            <StyledTextField label={this.props.label} margin="dense" variant="outlined" type={this.props.type} name={this.props.name} onChange={this.props.handleChange} value={this.props.value} className="form-control"/>
        }

      </div>
    )
  }
}

export default RtextField;
