import React, { Component } from 'react';
import { Grow } from '@material-ui/core/';

//REQUIRES
const moment = require('moment');

//ORGANISMS
import Pbody from '../organisms/profile/body';

class Profile extends Component {

  render(){
    return(
      <div>
        <Grow in={true}>
          <div className="container my-n5">
            <div className="card box-shadow mt-4">
              <div className="card-header">
                <h3>Perfil</h3>
              </div>
              <Pbody/>
            </div>
          </div>
        </Grow>
      </div>
    )
  }
}

export default Profile;
