import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//MOLECULES
import FaqsLeft from '../../molecules/means/faqsLeft';
import FaqsRight from '../../molecules/means/faqsRight';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: 365,
    maxWidth: 1140,
    minWidth: 450,
    marginTop: 20,
    marginBottom: 20
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: "50px",
    maxWidth: "300px",
    border: "none",
  }
}));

export default function Faqs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <FaqsLeft faqs={props.faqs} value={value} handleChange={handleChange} className={classes.tabs}/>
      <FaqsRight faqs={props.faqs} value={value}/>
    </div>
  );
}
