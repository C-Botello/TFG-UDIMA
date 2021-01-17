import React, { Component } from 'react';
import { render } from 'react-dom';

//SISTEMS
import Navbar from './partials/organisms/navbar';
import Tickets from './sistems/tickets';
import Means from './sistems/means';
import Map from './sistems/map';
import Profile from './sistems/profile';

//NAVBAR
const navbarElement = document.getElementById('react-navbar');
if (navbarElement) {
  render(<Navbar />, navbarElement);
}

//TICKETS
const ticketsElement = document.getElementById('react-tickets');
if (ticketsElement) {
  render(<Tickets />, ticketsElement);
}

//RECURSOS
const meansElement = document.getElementById('react-means');
if (meansElement) {
  render(<Means />, meansElement);
}

//MAPA CORONAVIRUS
const mapElement = document.getElementById('react-map');
if (mapElement) {
  render(<Map />, mapElement);
}

//PERFIL
const profileElement = document.getElementById('react-profile');
if (profileElement) {
  render(<Profile />, profileElement);
}
