import React from 'react';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

export default function SymptomsSearchAccordionDetails(props) {

  return (
    <AccordionDetails>
      <Typography>
        {props.description}
      </Typography>
    </AccordionDetails>
  );
}
