import React, { Component } from 'react';

//REQUIRES
const specialities = require('../../../../config/specialities');

class NTitem extends Component {

  render() {
    return (
      <div className="form-group">
        {this.props.type=="text"?
          <input type="text" name={this.props.name} onChange={this.props.handleChange} className="form-control" placeholder={this.props.placeholder} value={this.props.value} autoFocus/>
        : this.props.type=="textarea"?
        <textarea name={this.props.name} onChange={this.props.handleChange} className="form-control" placeholder={this.props.placeholder} value={this.props.value}></textarea>
        :
          <select name={this.props.name} className="form-control" value={this.props.value} onChange={this.props.handleChange}>
            <option disabled value='Especialidad'>Especialidad</option>
            {
              specialities.map(speciality => {
              return (
                <option key={speciality} value={speciality}>{speciality}</option>
              )
            })
            }
          </select>
        }
      </div>
    );
  }
}

export default NTitem;
