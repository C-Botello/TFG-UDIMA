import React from 'react';
import { Accordion} from '@material-ui/core/';

//ATOMS
import SymptomsSearchAccordionSummary from '../../atoms/means/symptomsSearchAccordionSummary';
import SymptomsSearchAccordionDetails from '../../atoms/means/symptomsSearchAccordionDetails';

export default function SymptomsSearchDiseases(props) {

  return (
    <Accordion key={props.name} expanded={props.expanded === props.name} onChange={props.handleChange(props.name)}  style={{backgroundColor:"#f0feed"}}>
      <SymptomsSearchAccordionSummary name={props.name} symptoms={props.symptoms} heading={props.heading} secondaryHeading={props.secondaryHeading} accordionChip={props.accordionChip}/>
      <SymptomsSearchAccordionDetails description={props.description}/>
    </Accordion>
  );
}
