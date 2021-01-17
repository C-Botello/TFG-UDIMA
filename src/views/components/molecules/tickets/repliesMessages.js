import React, { Component } from 'react';

//ATOMS
import Ruser from '../../atoms/tickets/repliesUser';
import Rreply from '../../atoms/tickets/repliesReply';
import RDate from '../../atoms/tickets/repliesDate';
import { Grow } from '@material-ui/core/';

class Rmessages extends Component {

  render() {

    return (
      <div className="overflow-nobar-y">
        <div className="mt-3">
          {
            // Respuestas del ticket elegido
            this.props.replies.map(ticketReply => {
              return (
                <Grow in={this.props.checkedReplies} style={{ transformOrigin: '0 0 0' }} {...(this.props.checkedReplies ? { timeout: 600 } : {})}>
                <div key={ticketReply._id} className="car-body row">
                  <div className="col">
                    <div key={ticketReply._id} className={this.props.user === ticketReply.user? "card replybox alert-info text-dark box-shadow text-left mb-3 border-0 float-right":"card replybox alert-primary text-dark box-shadow text-left mb-3 border-0 float-left"}>
                      <div className="card-body mx-n2 my-n3">
                        <Ruser user={ ticketReply.user } rol={ticketReply.userRolName}/>
                        <Rreply reply={ ticketReply.reply }/>
                        <RDate date={ ticketReply.date }/>
                      </div>
                    </div>
                  </div>
                </div>
              </Grow>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Rmessages;
