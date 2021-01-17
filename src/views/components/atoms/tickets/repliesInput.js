import React, { Component } from 'react';

//ICONS
import { AiOutlineSend } from "react-icons/ai";

class Rinput extends Component {

  render() {
    return (
      <form className="input-group box-shadow" onSubmit={this.props.addReply}>
          <textarea name="reply" className="form-control textarea-ticket box-shadow" placeholder="Responder al Ticket" onChange={this.props.handleChange} value={this.props.value}></textarea>
          <button type="submit" className="btn btn-info"><span className="mr-1">Enviar</span><AiOutlineSend className="mt-n1"/></button>
      </form>
    );
  }
}

export default Rinput;
