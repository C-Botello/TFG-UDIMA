import React, { Component } from 'react';

//MOLECULES
import Rmessages from '../../molecules/tickets/repliesMessages';
import Rform from '../../molecules/tickets/repliesForm';

class Replies extends Component {

  render() {
    return (
      <div>
        <Rmessages replies={this.props.replies} user={this.props.user} checkedReplies={this.props.checkedReplies}/>
        <Rform value={this.props.reply} addReply={this.props.addReply} handleChange={this.props.handleChange} status={this.props.status}/>
      </div>
    );
  }
}

export default Replies;
