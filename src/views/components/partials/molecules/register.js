import React, { Component } from 'react';
import { Divider } from '@material-ui/core/';

//ATOMS
import RtextField from "../atoms/register-textField";
import Rswitch from "../atoms/register-switch";
import Rspeciality from "../atoms/register-speciality";

class Register extends Component {
  constructor(){
    super();
    this.state = {
      name: null,
      email: null,
      rol: "Usuario",
      password: null,
      confPassword: null,
      checkedSwitch: false,
      checkedSpeciality: false,
      specialities: ["Alergología", "Cardiología"]
    };
    this.addUser = this.addUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = async (e) => {
    e.persist();
    const { name, value } = e.target;
    await this.setState({
      [name]: value
    })
  }

  handleChecked = () => {
    this.setState({ checkedSwitch: !this.state.checkedSwitch });
    if (this.state.checkedSwitch) {
      setTimeout(() => {  this.setState({ checkedSpeciality: !this.state.checkedSpeciality }); }, 1000)
    } else {
      this.setState({ checkedSpeciality: !this.state.checkedSpeciality });
    }

  }

    // AÑADIR UN NUEVO USUARIO
    addUser = (e) => {
      if (!this.state.checkedSwitch) {
        this.setState({ rol: "Usuario" });
      }
      const ths = this;
      fetch('/users/findUser', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then( data => {
        if (data === true) {
          this.props.notification("error", "Ya hay una cuenta utilizando esa dirección de correo")
        } else {
          if(this.state.name == null || this.state.email == null || this.state.password == null || this.state.confPassword == null || this.state.password != this.state.confPassword){
            if (this.state.name == null) {
              this.props.notification("error", "Es necesario indicar un nombre")
            }
            if (this.state.email == null) {
              this.props.notification("error", "Es necesario indicar un email")
            }
            if (this.state.password == null || this.state.confPassword == null) {
              if (this.state.password == null) {
                this.props.notification("error", "Es necesario indicar una contraseña")
              }
              if (this.state.confPassword == null) {
                this.props.notification("error", "Es necesario confirmar la contraseña")
              }
            } else if (this.state.password != this.state.confPassword) {
              this.props.notification("error", "Las contraseñas no coinciden")
            }
          } else {
              fetch('/users/register', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              })
              .then(
                this.setState({name: "", speciality: "Usuario", email: "", password: "", confPassword: ""})
              ).then(
                ths.props.closeRegister()
              ).then(
                ths.props.notification("success", "Registro realizado con éxito")
              )
              .catch(err => console.error(err));
          }
        }
      }).catch(err => console.error(err));
      e.preventDefault();
    }

  render(){
    return(
      <div>
        <div className="card box-shadow text-center">
          <div className="card-header">
            <h3>Registro</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.addUser}>
              <Rswitch checkedSwitch={this.state.checkedSwitch} handleChecked={this.handleChecked}/>
              <Divider component="div" variant="middle" className="mt-n1 mb-3"/>
              <RtextField label={"Nombre"} type={"text"} name={"name"} autoFocus={true} handleChange={this.handleChange} value={this.state.name}/>
              <RtextField label={"Correo Electrónico"} type={"email"} name={"email"} autoFocus={false} handleChange={this.handleChange} value={this.state.email}/>
              {
                this.state.checkedSpeciality?(
                  <Rspeciality handleChange={this.handleChange} value={this.state.rol} checkedSwitch={this.state.checkedSwitch}/>
                )
                :(null)
              }
              <RtextField label={"Contraseña"} type={"password"} name={"password"} autoFocus={false} handleChange={this.handleChange} value={this.state.password}/>
              <RtextField label={"Repite la Contraseña"} type={"password"} name={"confPassword"} autoFocus={false} handleChange={this.handleChange} value={this.state.confPassword}/>
              <div className="form-group mt-3">
                <button type="submit" className="btn btn-success btn-block">Registrarse</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
