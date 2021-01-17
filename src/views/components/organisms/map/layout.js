import React from "react";

//MOLECULES
import LbuttonGroup from '../../molecules/map/LayoutButtonGroup';

//Layouts
const names = ["Oscuro", "Claro", "Básico", "Satélite", "Azul"];
const urls = ["mapbox://styles/bitterblue/ckiwdub2d4q3z19rpdh2c3kz1", "mapbox://styles/bitterblue/ckiwdx3me2pl419mqehofylpw", "mapbox://styles/bitterblue/ckiwdeci22oda19mqmm1z2b1j", "mapbox://styles/bitterblue/ckiwdziy12pt919o7k60kiviy", "mapbox://styles/bitterblue/ckiwc90fe4oct19sz0zbw7v7j"];

export default function Layout(props) {
  const [selected, setSelected] = React.useState(names[0]);

  // CAMBIA EL ELEMENTO SELECCIONADO DE UN GRUPO DE BOTONES
  const handleSelected = (event, newSelected) => {
    setSelected(newSelected);
  };

  return (
    <div>
      <LbuttonGroup names={names} setLayout={props.setLayout} selected={selected} handleSelected={handleSelected} urls={urls}/>
    </div>
  );
}
