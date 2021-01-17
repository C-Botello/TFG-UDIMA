import React, { Component } from 'react';

//ICONS
import { RiChatNewLine } from "react-icons/ri";

class HtriggerTittle extends Component {

  render() {
    return (
        <div>
          <RiChatNewLine className="mt-n1"/><span className="ml-2">Nuevo Ticket</span>
        </div>
    );
  }
}

export default HtriggerTittle;
