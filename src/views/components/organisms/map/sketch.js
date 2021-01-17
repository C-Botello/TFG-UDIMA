import React, { Component } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";

//MOLECULES
import Tooltip from "../../molecules/map/tooltip";

const token = "pk.eyJ1IjoiYml0dGVyYmx1ZSIsImEiOiJja2htZjVhNnYwZXp3MnNrMXU5N3JjbWhxIn0.eNG4XiPeMylysx1q3lTrFw";

const initialState = {
  map_data: [],
  tooltip: null,
  viewport: {
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 2
  }
};

class Sketch extends Component {
  state = initialState;

  //EN CUANTO SE RENDERIZA LA VISTA
  componentDidMount() {
    this.setData();
  }

  //CUANDO SE ACTUALIZA LA VISTA ACTUALIZA LOS PROPS
  componentDidUpdate(previousProps) {
    const { query } = this.props;
    if (query !== previousProps.query) {
      this.setData();
    }
  }

  //SE ESTABLECE LA LÓGICA PARA DIFERENCIAR LOS DATOS
  setData = () => {
    const { colors, colorsConfirmed, colorsRecovered, colorsDeaths, data, query } = this.props;

    const map_data = data.filter(f => f[query] > 0);
    const counts = map_data.map(e => e[query]);
    const maxCount = Math.max(...counts);
    const minCount = Math.min(...counts);
    const difference = maxCount - minCount;
    const percentage1 = difference * 0.1;
    const percentage2 = difference * 0.3;
    const percentage3 = difference * 0.6;
    const percentage4 = difference * 0.8;

    //Por cada dato
    for (const d of map_data) {
      //Se identifica si se está filtrando por "confirmados", "muertes" o "curados"
      switch (query) {
        case "Confirmados":
          //Se ajusta el color y el tamaño según el filtro y la lógica indicada
          if (d[query] >= difference) {
              d.size = 65;
              d.color = colorsConfirmed[5];
          } else if (d[query] >= percentage4 && d[query] < difference) {
              d.size = 60;
              d.color = colorsConfirmed[4];
          } else if (d[query] < percentage4 && d[query] >= percentage3) {
              d.size = 55;
              d.color = colorsConfirmed[3];
          } else if (d[query] < percentage3 && d[query] >= percentage2) {
              d.size = 45;
              d.color = colorsConfirmed[2];
          } else if (d[query] < percentage2 && d[query] >= percentage1) {
              d.size = 25;
              d.color = colorsConfirmed[1];
          } else {
              d.size = 15;
              d.color = colorsConfirmed[0];
          }
          break;
        case "Muertos":
          //Se ajusta el color y el tamaño según el filtro y la lógica indicada
          if (d[query] >= difference) {
              d.size = 65;
              d.color = colorsDeaths[5];
          } else if (d[query] >= percentage4 && d[query] < difference) {
              d.size = 60;
              d.color = colorsDeaths[4];
          } else if (d[query] < percentage4 && d[query] >= percentage3) {
              d.size = 55;
              d.color = colorsDeaths[3];
          } else if (d[query] < percentage3 && d[query] >= percentage2) {
              d.size = 45;
              d.color = colorsDeaths[2];
          } else if (d[query] < percentage2 && d[query] >= percentage1) {
              d.size = 25;
              d.color = colorsDeaths[1];
          } else {
              d.size = 15;
              d.color = colorsDeaths[0];
          }
          break;
        case "Curados":
          //Se ajusta el color y el tamaño según el filtro y la lógica indicada
          if (d[query] >= difference) {
              d.size = 65;
              d.color = colorsRecovered[5];
          } else if (d[query] >= percentage4 && d[query] < difference) {
              d.size = 60;
              d.color = colorsRecovered[4];
          } else if (d[query] < percentage4 && d[query] >= percentage3) {
              d.size = 55;
              d.color = colorsRecovered[3];
          } else if (d[query] < percentage3 && d[query] >= percentage2) {
              d.size = 45;
              d.color = colorsRecovered[2];
          } else if (d[query] < percentage2 && d[query] >= percentage1) {
              d.size = 25;
              d.color = colorsRecovered[1];
          } else {
              d.size = 15;
              d.color = colorsRecovered[0];
          }
          break;
        default:
          //Se ajusta el color y el tamaño según el filtro y la lógica indicada
          if (d[query] >= difference) {
            d.size = 65;
            d.color = colorsConfirmed[5];
          } else if (d[query] >= percentage4 && d[query] < difference) {
              d.size = 60;
              d.color = colorsConfirmed[4];
          } else if (d[query] < percentage4 && d[query] >= percentage3) {
              d.size = 55;
              d.color = colorsConfirmed[3];
          } else if (d[query] < percentage3 && d[query] >= percentage2) {
              d.size = 45;
              d.color = colorsConfirmed[2];
          } else if (d[query] < percentage2 && d[query] >= percentage1) {
              d.size = 25;
              d.color = colorsConfirmed[1];
          } else {
              d.size = 15;
              d.color = colorsConfirmed[0];
          }
        }
      }

    //ESTABLECE LOS DATOS DEL MAPA
    this.setState({
      map_data
    });
  };

  //CIERRA LA VENTANA EMERGENTE
  closeTooltip = () => {
    this.setState({ tooltip: null });
  };

  render() {
    const { map_data, tooltip, viewport } = this.state;
    const { fields, layout } = this.props;

    return (
      <ReactMapGL {...viewport} mapboxApiAccessToken={token} mapStyle={layout} onViewportChange={viewport => this.setState({ viewport })}>
        {
          map_data.map((country, index) => {
            const longitude = Number(country.coordinates.longitude);
            const latitude = Number(country.coordinates.latitude);

            return (
              <Marker key={index} longitude={longitude} latitude={latitude}>
                <div className="map-icon" style={{ backgroundColor: country.color, height: country.size, width: country.size }} onMouseEnter={() => this.setState({ tooltip: country })} onMouseLeave={() => this.closeTooltip()}/>
              </Marker>
            );
          })
        }

        {
          tooltip && (<Tooltip elements={tooltip} fields={fields} closeTooltip={this.closeTooltip}/>)
        }

        <div className="map-nav">
          <NavigationControl onviewportChange={view => this.setState({ view })}/>
        </div>
      </ReactMapGL>
    );
  }
}

export default Sketch;
