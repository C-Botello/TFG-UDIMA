import React, { Component } from 'react';
import { FormControl, InputLabel, Select, Fade } from '@material-ui/core/';

const specialities = require('../../../../config/specialities');

class Rspeciality extends Component {
  render(){
    return(
      <Fade in={this.props.checkedSwitch} {...(this.props.checkedSwitch ? { timeout: 1300 } : {timeout: 1300})}>
      <FormControl variant="outlined" margin="dense" className="form-control" style={{marginBottom: "-1px"}}>
      <InputLabel htmlFor="outlined-age-native-simple">Especialidad</InputLabel>
      <Select color="info" native value={this.props.value} onChange={this.props.handleChange} label="Especialidad" name='rol' inputProps={{ name: 'rol', id: 'speciality', }} >
      <option value=""/>
        {
          specialities.map(speciality => {
          return (
            <option key={speciality} value={speciality}>{speciality}</option>
          )
        })
        }
      </Select>
    </FormControl>
  </Fade>
    )
  }
}

export default Rspeciality;
