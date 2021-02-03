import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { TextField, Grow } from '@material-ui/core/';
import io from 'socket.io-client';

//REQUIRES
const moment = require('moment');

//CSS
import "../../../public/css/tickets.css";
import 'react-notifications/lib/notifications.css';

//ORGANISMS
import Header from '../organisms/tickets/header';
import TableTickets from '../organisms/tickets/tableTickets';
import NewTicket from '../organisms/tickets/newTicket';
import MyTicket from '../organisms/tickets/myTicket';
import Replies from '../organisms/tickets/replies';

class Tickets extends Component {

  constructor(){
    super();
    this.state = {
      width: window.innerWidth || document.body.clientWidth,
      issue: "",
      speciality: 'Especialidad',
      description: "",
      tickets: [],
      myTicket: [],
      replies: [],
      reply: "",
      user: [],
      status: 0,
      modal: false,
      messages: [],
      search: [],
      ticketsFilter: [],
      checkedReplies: false,
      filter: "Asunto\n",
      page: 0
    };
    this.addTicket = this.addTicket.bind(this);
    this.addReply = this.addReply.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  // EJECUTAR NADA MÁS RENDERIZAR LA VISTA
  componentDidMount = () => {
    this.socket = io('/')
      this.socket.on('message', message => {
        this.setState({ messages: [message, ...this.state.messages]});
        this.setState({ replies: [...this.state.replies, message.body]});
      })
    this.currentTickets();
    this.currentUser();
    window.addEventListener('resize', this.windowWidth);
  }

  // EJECUTAR NADA MÁS DESRENDERIZAR LA VISTA
  componentWillUnmount() {
    window.removeEventListener('resize', this.windowWidth);
  }

  // ESTABLECE EL TAMAÑO DE VENTANA
  windowWidth = () => {
    this.setState({ width: window.innerWidth || document.body.clientWidth });
  }

  // MODIFICA EL ESTADO CON EL VALOR DE UN CAMPO
  handleChange = async (e) => {
    e.persist();
    const { name, value } = e.target;
    await this.setState({
      [name]: value
    })
    if (this.state.issue == "" && this.state.description == "") {
      this.filterSearch();
    }
  }

  // MODIFICA EL ESTADO FILTRO CON EL VALOR INDICADO
  handleFilter = (e) => {
    e.persist();
    this.setState({filter: e.target.innerText});
  }

  setPage = (num) => {
    this.setState({page: num});
  }

  // NOTIFICACIONES
  notification = (type, tittle, message, time) => {
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

  // FILTRA LOS TICKETS SEGÚN EL VALOR INTRODUCIDO EN EL BUSCADOR
  filterSearch = () => {
    let filterSelected = null;
      let filterData = this.state.tickets.filter(item => {
        if (this.state.filter == "Asunto\n") {
          filterSelected = item.issue;
        } else if (this.state.filter == "Especialidad\n") {
          filterSelected = item.speciality;
        } else if (this.state.filter == "Propietario\n") {
          filterSelected = item.user;
        } else if (this.state.filter == "Fecha\n") {
          filterSelected = moment(item.date).format('DD/MM/YYYY');
        } else {
          filterSelected = item.issue;
        }

        if (filterSelected.toString().toLowerCase().includes(this.state.search.toLowerCase())) {
          return item;
        }
      })
      this.setState({ticketsFilter: filterData});
      this.setPage(0);
  }

  // OBTENER USUARIO ACTUAL
  currentUser() {
    fetch('/users/user')
    .then(res => res.json())
    .then(data => {
      this.setState({user: data});
    });
  }

  // OBTENER TICKETS
  currentTickets = () => {
    fetch('/tickets/ticket')
    .then(res => res.json())
    .then(data => {
      this.setState({tickets: data});
      this.setState({ticketsFilter: data});
    });
  }

  // CERRAR/ABRIR UN TICKET
  handleTicketStatus = async (id) => {
    fetch(`/tickets/ticket/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({status: data});
    })
    .then(
      setTimeout(() => {  this.currentTickets(); }, 250),
      setTimeout(() => {
        this.state.status == "0"? (
          this.notification("info", "Ticket Cerrado"),
          this.state.myTicket != ""? (this.myTicket(id)):(null)
        ):(
          this.notification("info", "Ticket Abierto"),
          this.state.myTicket != ""? (this.myTicket(id)):(null)
        )
      }, 250)
    )
  }

    // NOTIFICACIONES CUANDO SE CIERRA O ABRE UN TICKET
    statusNotification = () => {
      if (this.state.status == "0") {
        this.notification("info", "Ticket Cerrado");

      } else if (this.state.status == "1") {
        this.notification("info", "Ticket Abierto");
      }
    }

  // OBTENER UN TICKET
  myTicket = (id) => {
    fetch(`/tickets/ticket/${id}`)
    .then(res => res.json())
    .then(data => {
      this.setState({myTicket: data});
      this.setState({checkedReplies: true});
    })
  }

  // OBTENER RESPUESTAS DE UN TICKET
   replies = async (id) => {
    await this.myTicket(id)
    fetch(`/tickets/replies/${id}`)
    .then(res => res.json())
    .then(data => {
        this.setState({replies: data});
    })
    .catch(err => console.error(err))
  }

  // MANEJO DE MENSAJES ENVIADOS POR SOCKETS
  handleSocket = () => {
    const body = {
      reply: this.state.reply,
      user: this.state.user.name,
      userRolName: this.state.user.rol,
      userEmail: this.state.user.email,
      date: moment().format("YYYY-MM-DDThh:mm:ss")
    }
    if(this.state.reply != "") {
      const message = { body }
      this.setState({ replies: [...this.state.replies, body]}),
      this.setState({ messages: [message, ...this.state.messages]}),
      this.socket.emit('message', body)
    }
    else{
      this.notification("warning", "La respuesta debe contener algún mensaje");
    }
  }

  // AÑADIR UN NUEVO TICKET
  addTicket = (e) => {
    if(this.state.issue == "" || this.state.speciality == "Especialidad" || this.state.description == ""){
      if (this.state.issue == "") {
        this.notification("error", "El asunto no puede estar vacío")
      }
      if (this.state.speciality == "Especialidad") {
        this.notification("error", "Es necesario escoger una especialidad")
      }
      if (this.state.description == "") {
        this.notification("error", "La descripción no puede estar vacía")
      }
    } else {
        fetch('/tickets/ticket', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(data => {
          this.setState({issue: "", speciality: "Especialidad", description: ""})

        }).then(
          this.toggle(),
          setTimeout(() => { this.currentTickets(); }, 250),
          this.notification("success", "Ticket Creado")
        )
        .catch(err => console.error(err));
    }

    e.preventDefault();
  }

  // AÑADIR UNA NUEVA RESPUESTA
  addReply = (e) => {
    const id = this.state.myTicket._id;

    fetch(`/tickets/replies/${id}`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(
        this.handleSocket()
    ).then (
        this.setState({ reply: "" })
    ).then(
        e.preventDefault()
    )
    .catch(err => console.error(err));
  }

  // DESELECIONA EL TICKET SELECCIONADO
  clearMyTicket = () => {
    this.setState({checkedReplies: false});
    setTimeout(() => { this.setState({myTicket: []}); }, 400)
  }

  // INTERCAMBIA EL ESTADO DE LA VENTANA EMERGENTE
  toggle = () => {
    this.setState({modal: !this.state.modal});
    this.setState({issue: "", speciality: "Especialidad", description: ""})
  }

  render() {
    return (
      <div>
        <Grow in={true}>
          <div className="container-fluid my-n5">
            <div className="row">
              {/* Tickets */}
              <div className={this.state.myTicket.user == undefined? "col":"col-7 d-none d-sm-none d-md-block"}>
                <div className="card box-shadow mt-4 text-center" style={this.state.width <= 991 && this.state.myTicket.user != undefined ? {maxWidth:"530px"}:null}>
                  <Header myTicket={this.state.myTicket} rol={this.state.user.rol} toggle={this.toggle} handleChange={this.handleChange} handleFilter={this.handleFilter}/>
                  <NewTicket issue={this.state.issue} modal={this.state.modal} speciality={this.state.speciality} description={this.state.description} search={this.state.search} toggle={this.toggle} addTicket={this.addTicket} handleChange={this.handleChange}/>
                  <TableTickets tickets={this.state.ticketsFilter} replies={this.replies} search={this.state.search}  page={this.state.page} setPage={this.setPage} id={this.state.myTicket._id} user={this.state.user} handleTicketStatus={this.handleTicketStatus}/>
                </div>
              </div>
              {/* Respuestas */}
              {
                this.state.myTicket.user == undefined? (null)
                :(
                  <Grow in={this.state.checkedReplies} style={{ transformOrigin: '0 0 0' }} {...(this.state.checkedReplies ? { timeout: 600 } : {})}>
                    <div className="col">
                      <MyTicket myTicket={this.state.myTicket} clearMyTicket={this.clearMyTicket}/>
                      <Replies replies={this.state.replies} user={this.state.user.name} status={this.state.myTicket.status} reply={this.state.reply} addReply={this.addReply} handleChange={this.handleChange} checkedReplies={this.state.checkedReplies}/>
                    </div>
                  </Grow>
                )
              }
            </div>
          </div>
        </Grow>
        <NotificationContainer/>
      </div>
    )
  }
}

export default Tickets;
