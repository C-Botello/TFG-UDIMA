import React, { Component } from 'react';

//ATOMS
import Rinput from '../../atoms/tickets/repliesInput';
import Rclose from '../../atoms/tickets/repliesClose';

class Rform extends Component {

  render() {
    return (
      this.props.status == 1? (
        <Rinput addReply={this.props.addReply} handleChange={this.props.handleChange} value={this.props.value}/>
    ):(<Rclose/>)
    );
  }
}

export default Rform;
