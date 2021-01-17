import React from 'react';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { MdExpandMore } from "react-icons/md";
import Chip from '@material-ui/core/Chip';

export default function SymptomsSearchAccordionSummary(props) {

  return (
    <AccordionSummary expandIcon={<MdExpandMore />} id={props.name}>
      <Typography className={props.heading}>{props.name}</Typography>
      <Typography className={props.secondaryHeading}>Sintomas:{props.symptoms.map(symptom => (<Chip className={props.accordionChip} size="small" label={symptom}/>))}</Typography>
    </AccordionSummary>
  );
}
