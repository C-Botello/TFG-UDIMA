import React from 'react';
import { TextField } from '@material-ui/core/';
import styled from 'styled-components';

//ICONS
import { BsSearch } from "react-icons/bs";

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

export default function HsearchBar(props) {

  return (
    <div className="col">
      <StyledTextField className="ml-n4 mr-n3" size="small" name="search" color="primary" id="filled-search" label={<BsSearch/>} type="search" variant="outlined" defaultValue={props.search} onChange={props.handleChange}/>
    </div>
  );
}
