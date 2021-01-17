import React, { useState, useEffect } from 'react';
import { Button, Popover, Typography } from '@material-ui/core/';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import Login from "../molecules/login";
import Register from "../molecules/register";
import Npages from "../molecules/navbar-pages";
import Ndropdown from "../molecules/navbar-dropdown";

export default function Navbar() {

  const [user, setUser] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [register, setRegister] = React.useState(null);
  const info = window.location.search;

  //NADA MÁS RENDERIZAR O ACTUALIZAR
  useEffect( async () => {
    await handleUser();
  }, [info]);

  // OBTIENE EL USUARIO Y NOTIFICA
  const handleUser = () => {
    fetch('/users/user')
    .then(res => res.json())
    .then(data => {
      setUser(data);
      if (info == "?ok" && (data !== null)) {
        notification("success", "Bienvenido " + data.name)
      }
    })
    if (info == "?err") {
      notification("error", "Credenciales incorrectas")
    }
    if (info == "?logout") {
      notification("info", "La Sesión se ha Cerrado")
    }
    if (info == "?auth") {
      notification("error", "Para acceder es necesario iniciar sesión")
    }
    if (info == "?delete") {
      notification("success", "La Cuenta ha sido Completamente Eliminada")
    }
  };

  // NOTIFICACIONES
  const notification = (type, tittle, message, time) => {
    switch (type) {
      case 'info':
        NotificationManager.info(message, tittle, time);
        break;
      case 'success':
        NotificationManager.success(message, tittle, time);
        break;
      case 'warning':
        NotificationManager.warning(message, tittle, time);
        break;
      case 'error':
        NotificationManager.error(message, tittle, time);
        break;
    }
  };

  const handleClick = (event) => {
    setLogin(event.currentTarget);
  };

  const handleClose = () => {
    setLogin(null);
  };

  const handleRegister = (event) => {
    setRegister(event.currentTarget);
  };

  const closeRegister = () => {
    setRegister(null);
  };

  const openLogin = Boolean(login);
  const idLogin = openLogin ? 'simple-popover' : undefined;
  const openRegister = Boolean(register);
  const idRegister = openRegister ? 'simple-popover' : undefined;

  return(
    <nav className="mb-1 navbar navbar-expand-lg navbar-dark navegation navbar-static-top">
      <div className="container-fluid">
        <span className="navbar-brand mr-4"><Typography variant="h5" style={{textTransform: "none"}}>HelpDesk</Typography></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Npages/>
          {
            user?(
              <Ndropdown name={user.name}/>
            ):(
              <ul className="navbar-nav ml-auto pr-5">
                <li className="nav-item">
                  <Button className="nav-link" aria-describedby={idLogin} onClick={handleClick}>
                    Iniciar Sesión
                  </Button>
                  <Popover style={{zIndex: "9999"}} id={idLogin} open={openLogin} anchorEl={login} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
                    <Login/>
                  </Popover>
                </li>
                <li className="nav-item">
                  <Button className="nav-link" aria-describedby={idRegister} onClick={handleRegister}>
                    Regitrarse
                  </Button>
                  <Popover style={{zIndex: "9999"}} id={idRegister} open={openRegister} anchorEl={register} onClose={closeRegister} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
                    <Register closeRegister={closeRegister} notification={notification}/>
                  </Popover>
                </li>
              </ul>
            )
          }
        </div>
      </div>
      <NotificationContainer/>
    </nav>
  )
}
