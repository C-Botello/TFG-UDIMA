import React, { Component } from 'react';

//ATOMS
import LtextField from "../atoms/login-textField";

class Login extends Component {

  render(){
    return(
      <div>
        <div className="card box-shadow text-center">
          <div className="card-header">
            <h3>Inicio de Sesión</h3>
          </div>
          <div className="card-body">
            <form action="/users/login" method="post">
              <LtextField label={"Correo Electrónico"} type={"email"} name={"email"} autoFocus={true}/>
              <LtextField label={"Contraseña"} type={"password"} name={"password"} autoFocus={false}/>
              <div className="form-group">
                <button type="submit" className="btn btn-info btn-block">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
