import React, { Component } from "react";
import { MdEdit } from "react-icons/md";

//ATOMS
import Btittle from '../../atoms/profile/bodyTittle';
import Bvalue from '../../atoms/profile/bodyValue';
import Bedit from '../../atoms/profile/bodyEdit';

class Bitem extends Component {

  render() {
    return (
      <div className="d-flex justify-content-start align-middle ml-4">
        <Btittle tittle={this.props.tittle}/>
        <Bvalue value={this.props.value}/>
        {
          this.props.edit?
            <Bedit icon={<MdEdit style={{minWidth: "14px", maxWidth: "14px", minHeight: "14px", maxHeight: "14px"}}/>}/>
          :null
        }
      </div>
    );
  }
}

export default Bitem;
