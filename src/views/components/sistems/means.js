import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { Grow } from '@material-ui/core/';

import "../../../public/css/means.css";

import Faqs from '../organisms/means/faqs';
import InterestLink from '../organisms/means/interestLink';
import SymptomsSearch from '../organisms/means/symptomsSearch';

class Means extends Component {
  constructor(){
    super();
    this.state = {
      width: window.innerWidth || document.body.clientWidth,
      onTest:false,
      onFaqs: false,
      onSymptoms: false,
      onInterestLinks: false,
      hover: false,
      diseases: null,
      symptoms: null,
      faqs: null,
      links: null
    };
  }
  // EJECUTAR NADA MÁS RENDERIZAR LA VISTA
  componentDidMount = () => {
    this.currentDiseases();
    this.currentFaqs();
    this.currentLinks();
    window.addEventListener('resize', this.windowWidth);
  }

  // EJECUTAR NADA MÁS DESRENDERIZAR LA VISTA
  componentWillUnmount() {
    window.removeEventListener('resize', this.windowWidth);
  }

  // ESTABLECE EL TAMAÑO DE VENTANA
  windowWidth = () => {
    this.setState({ width: window.innerWidth || document.body.clientWidth });
    console.log(this.state.width);
  }

  // OBTENER ENFERMEDADES
  currentDiseases = () => {
    fetch('/means/diseases')
    .then(res => res.json())
    .then(data => {
      this.setState({diseases: data});
      this.totalSymptoms(data);
    });
  }

  // OBTENER FAQS
  currentFaqs = () => {
    fetch('/means/faqs')
    .then(res => res.json())
    .then(data => {
      this.setState({faqs: data});
    });
  }

  // OBTENER LINKS DE INTERES
  currentLinks = () => {
    fetch('/means/links')
    .then(res => res.json())
    .then(data => {
      this.setState({links: data});
    });
  }

  totalSymptoms = (diseases) => {
    let noRepeatSymptoms = [];
    diseases.map( disease => (
        disease.symptoms.map( symptom => (noRepeatSymptoms.includes(symptom[0])? null : noRepeatSymptoms.push(symptom[0])))
    ));
    let clasifiedSymptoms = [];
    noRepeatSymptoms.map((symptom, index)=> (
      clasifiedSymptoms.push({label: symptom, value: index+1})
    ));
    this.setState({symptoms: clasifiedSymptoms})
  }

  openTest = () => {
    this.setState({onTest: true});
  }

  closeTest = () => {
    setTimeout(() => { this.setState({onTest: false}); }, 550);
  }

  openFaqs = () => {
    this.setState({onFaqs: true});
    this.setState({hover: true});
  }

  closeFaqs = () => {
    this.setState({onFaqs: false});
    this.setState({hover: false});
  }

  openSymptoms = () => {
    this.setState({onSymptoms: true});
    this.setState({hover: true});
  }

  closeSymptoms = () => {
    this.setState({onSymptoms: false});
    this.setState({hover: false});
  }

  openInterestLinks = () => {
    this.setState({onInterestLinks: true});
    this.setState({hover: true});
  }

  closeInterestLinks = () => {
    this.setState({onInterestLinks: false});
    this.setState({hover: false});
  }

  render(){
    return(
      <div>
        <Grow in={true}>
          <div className="container-fluid my-n5">
            <div className="card box-shadow mt-4">
              <div className="card-header">
                <div className="row mb-n2">
                  <div className="col text-center"><h4>Recursos</h4></div>
                </div>
              </div>
              <div className="card-body means">
                <Fade in={!this.state.onTest} style={{ transformOrigin: '0 0 0' }} {...(!this.state.onTest ? { timeout: 700 } : {})}>
                  <div className="row justify-content-center">
                    <div className="col folder faqs box-shadow mr-2 overflow-nobar" onMouseEnter={this.openFaqs} onMouseLeave={this.closeFaqs}>
                      <Fade in={!this.state.onFaqs}>
                         {
                           !this.state.hover?
                              <div className="tittle-center"><span className="tittle-folder">Preguntas Frecuentes</span></div>
                            :
                              <div></div>
                          }
                      </Fade>
                      <Fade in={this.state.onFaqs}>
                        {
                           this.state.hover?
                             <div><Faqs faqs={this.state.faqs}/></div>
                           :
                             <div></div>
                         }
                      </Fade>
                    </div>
                    <div style={{maxWidth:"7%"}}></div>
                    <div className="col folder symptoms box-shadow overflow-nobar" onMouseEnter={this.openSymptoms} onMouseLeave={this.closeSymptoms}>
                      <Fade in={!this.state.onSymptoms}>
                        {
                          !this.state.hover?
                            <div className="tittle-center"><span className="tittle-folder">Buscador de Sintomas</span></div>
                          :
                            <div></div>
                        }
                      </Fade>
                      <Fade in={this.state.onSymptoms}>
                        {
                          this.state.hover?
                            <div><SymptomsSearch diseases={this.state.diseases} symptoms={this.state.symptoms}/></div>
                          :
                            <div></div>
                        }
                      </Fade>
                    </div>
                    <div style={{maxWidth:"7%"}}></div>
                    <div className="col folder interest-links box-shadow ml-2 overflow-nobar" onMouseEnter={this.openInterestLinks} onMouseLeave={this.closeInterestLinks}>
                      <Fade in={!this.state.onInterestLinks}>
                        {
                          !this.state.hover?
                            <div className="tittle-center"><span className="tittle-folder">Enlaces de Interés</span></div>
                          :
                            <div></div>
                        }
                      </Fade>
                      <Fade in={this.state.onInterestLinks}>
                        {
                          this.state.hover?
                            <div>
                              <InterestLink links={this.state.links} width={this.state.width}/>
                            </div>
                          :
                            <div></div>
                        }
                      </Fade>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </Grow>
      </div>
    )
  }
}

export default Means;
