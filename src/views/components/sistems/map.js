import React, { Component } from "react";
import axios from "axios";
import { Button, ButtonGroup} from "reactstrap";
import { Grow } from '@material-ui/core/';

//ORGANISMS
import Menu from "../organisms/map/menu";
import Sketch from "../organisms/map/sketch";
import Layout from "../organisms/map/layout";
import TotalsLabel from "../organisms/map/totalsLabel";

import { coordinates } from "../../../config/coordinates";
import "../../../public/css/map.css";

const initialState = {
  colors: [
    "rgba(255, 222, 0, 0.5)",
    "rgba(255,0,46,0.5)",
    "rgba(0,255,125,0.5)"
  ],
  colorsConfirmed: [
    "rgba(255, 241, 147, 0.5)",
    "rgba(255, 236, 112, 0.5)",
    "rgba(255, 232, 78, 0.5)",
    "rgba(255, 227, 40, 0.5)",
    "rgba(255, 222, 0, 0.5)",
    "rgba(202, 152, 0, 0.5)"
  ],
  colorsDeaths: [
    "rgba(255,157,175,0.5)",
    "rgba(255,124,148,0.5)",
    "rgba(255,87,118,0.5)",
    "rgba(255,44,82,0.5)",
    "rgba(255,0,46,0.5)",
    "rgba(175,0,32,0.5)"
  ],
  colorsRecovered: [
    "rgba(165,255,209,0.5)",
    "rgba(129,255,191,0.5)",
    "rgba(91,255,171,0.5)",
    "rgba(46,255,148,0.5)",
    "rgba(0,255,125,0.5)",
    "rgba(0,178,87,0.5)"
  ],
  countriesData: [],
  dataOK: false,
  fields: ["Confirmados", "Muertos", "Curados"],
  query: "Confirmados",
  layout: "mapbox://styles/bitterblue/ckiwdub2d4q3z19rpdh2c3kz1",
  totalConfirmed: 0,
  totalDeaths: 0,
  totalRecovered: 0
};

class Map extends Component {
  state = initialState;

  //EN CUANTO SE CARGA LA VISTA
  componentDidMount() {
    this.fetchCountryData();
  }

  //OBTIENE LOS DATOS DEL REPOSITORIO
  fetchCountryData = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://corona-api.com/countries"
      });

      //Procesa y almacena los datos obtenidos del repositorio
      const countriesData = this.handleData(response.data.data);

      //Se almacenan los datos en el estado
      this.setState({
        countriesData,
        dataOK: true
      });
    } catch (e) {
      console.log("No ha sido posible recoger los datos", e);
    }
  };

  //PROCESADO DE DATOS
  handleData = data => {
    let countriesData = [];

    //Por cada país
    for (const d of data) {
      //Se identifican los datos
      let country = {
        name: d.name,
        code: d.code,
        flag: `https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/${d.code.toLowerCase()}.svg`,
        updated_at: d.updated_at,
        Confirmados: d.latest_data.confirmed,
        Muertos: d.latest_data.deaths,
        Curados: d.latest_data.recovered,
      };

      //Se calcula el total de cada caso
      this.setState({ totalConfirmed: this.state.totalConfirmed + d.latest_data.confirmed });
      this.setState({ totalDeaths: this.state.totalDeaths + d.latest_data.deaths });
      this.setState({ totalRecovered: this.state.totalRecovered + d.latest_data.recovered });

      //Se utiliza el fichero de coordenadas para identificar con los datos
      country["coordinates"] = {
        latitude:
          coordinates.find(f => f.country_code === d.code) !== undefined ? coordinates.find(f => f.country_code === d.code).latlng[0] : 0,
        longitude:
          coordinates.find(f => f.country_code === d.code) !== undefined ? coordinates.find(f => f.country_code === d.code).latlng[1] : 0
      };

      //Se añaden los datos procesados
      countriesData.push(country);
    }

    //Se formatean los valores
    this.setState({ totalConfirmed: this.state.totalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") });
    this.setState({ totalDeaths: this.state.totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") });
    this.setState({ totalRecovered: this.state.totalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") });

    return countriesData;
  };

  //ESTABLECE EL LAYOUT
  setLayout = (data) => {
    this.setState({ layout: data });
  };

  //ESTABLECE LA CONSULTA
  setQuery = query => {
    this.setState({ query });
  };

  //RENDERIZA LA VISTA
  render() {

    //Solo si los datos se obtuvieron correctamente
    return this.state.dataOK ? (
      <div>
        <Grow in={true}>
          <div className="container-fluid my-n5">
            <div className="card box-shadow mt-4">
              <TotalsLabel totalConfirmed={this.state.totalConfirmed} totalDeaths={this.state.totalDeaths} totalRecovered={this.state.totalRecovered}/>
              <div className="map box-shadow">
                <Menu className="menu" colors={this.state.colors} fields={this.state.fields} query={this.state.query} setMenu={this.setQuery}/>
                <Sketch colors={this.state.colors} colorsConfirmed={this.state.colorsConfirmed} colorsRecovered={this.state.colorsRecovered} colorsDeaths={this.state.colorsDeaths} data={this.state.countriesData} fields={this.state.fields} layout={this.state.layout} query={this.state.query}/>
              </div>
              <div>
                <Layout setLayout={this.setLayout}/>
              </div>
              <div className="card-footer">
                <p className="font-weight-lighter text-right my-n2">datos obtenidos de <a href="http://www.about-corona.net">www.about-corona.net</a></p>
              </div>
              </div>
          </div>
        </Grow>
      </div>
    ) : null;
  }
}

export default Map;
