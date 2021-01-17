//Own modification of the open source component developed by Lubuskie for material-ui
//https://bit.dev/lubuskie/material-ui/multiple-select-chips

import React from "react";
import PropTypes from "prop-types";
import { makeStyles, FormLabel, Chip, Typography, FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: ".5rem 0 .5rem",
    textAlign: "center",
  },
  chipsDiv: {
    marginTop: ".3rem",
  },
  chip: {
    boxShadow: "0px 1px 3px 0 rgba(0, 0, 0, 0.2)",
    marginRight: ".5rem",
  },
  formHelperText: {
    textAlign: "center",
  },
}));

const chips = [];

export default function MultipleSelectChips ({ value, setValue, options, label, setSelectedChips }) {
  const classes = useStyles();

  const handleClick = (clicked) => {
    const index = value.findIndex((e) => e === clicked.value);
    
    if (value.find((e) => e === clicked.value)) {
      let arr = [...value];
      arr.splice(index, 1);
      setValue(arr);
    } else {
      setValue([...value, clicked.value]);
    }
    if (chips.includes(clicked.label)) {
      chips.splice(index, 1);
    } else {
      chips.push(clicked.label);
    }
    setSelectedChips(chips);
  };

  return (
      <div>
      <div className={classes.container}>
        <div className={classes.chipsDiv}>
          {
            options && options.length?
              options.map((option, i) => (
                <Chip icon={option.icon} className={classes.chip} size="small" key={i} style={value.find((e) => e === option.value)?{backgroundColor:"#92e492"}:{}} variant={value.find((e) => e === option.value)? "default": "outlined"} label={<Typography variant="body2">{`${option.label}`}</Typography>} clickable onClick={() => handleClick(option)}/>
              ))
            : null
          }
        </div>
      </div>
    </div>
  );
};

MultipleSelectChips.propTypes = {
  label: PropTypes.string,
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
};
