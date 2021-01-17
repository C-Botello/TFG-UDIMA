import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grow} from '@material-ui/core/';

//MOLECULES
import SymptomsSearchChipsBox from '../../molecules/means/symptomsSearchChipsBox';
import SymptomsSearchDiseases from '../../molecules/means/symptomsSearchDiseases';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordionChip: {
    boxShadow: "0px 1px 3px 0 rgba(0, 0, 0, 0.2)",
    color: "#616161",
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10
  }
}));

export default function SymptomsSearch(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = useState([])
  const [selectedChips, setSelectedChips] = useState([])
  const options = props.symptoms
  let diseaseSymptoms = [];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChips = (chips) => {
    setSelectedChips(chips);
  };

  const isIncluded = (diseaseSymptoms, selectedChips) => {
    return selectedChips.every(i => diseaseSymptoms.includes(i));
  }

  return (
    <div className={classes.root}>
      <SymptomsSearchChipsBox value={value} setValue={setValue} setSelectedChips={setSelectedChips} options={options}/>
      {
        props.diseases.map((disease) => (
          diseaseSymptoms = [],
          disease.symptoms.map(symptom => diseaseSymptoms.push(symptom[0])),
          <Grow in={isIncluded(diseaseSymptoms,selectedChips)}>
            {
              isIncluded(diseaseSymptoms,selectedChips)?
                <SymptomsSearchDiseases name={disease.name} expanded={expanded} symptoms={disease.symptoms} description={disease.description} handleChange={handleChange} heading={classes.heading} secondaryHeading={classes.secondaryHeading} accordionChip={classes.accordionChip}/>
              :
                <div></div>
            }
          </Grow>
        ))
      }
    </div>
  );
}
