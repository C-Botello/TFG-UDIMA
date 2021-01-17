import React from 'react';

//ATOMS
import MultipleSelectChips from '../../atoms/means/multipleSelectChips';
import SymptomsSearchLabelChips from '../../atoms/means/symptomsSearchLabelChips';

export default function SymptomsSearchChipsBox(props) {

  const { value, setValue, setSelectedChips, options } = props;

  return (
    <div className="mb-3 d-flex justify-content-center">
      <div className="row chips-label box-shadow">
        <SymptomsSearchLabelChips label={"Busqueda por Etiquetas:"}/>
        <MultipleSelectChips className="col" label="Label" value={value} setValue={setValue} setSelectedChips={setSelectedChips} options={options}/>
      </div>
    </div>
  );
}
