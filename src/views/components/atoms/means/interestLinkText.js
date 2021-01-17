import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function InterestLinkText(props) {
  const type = props.type;
  return (
    <div>
      <Typography component={props.type == "subtitle1"? "" : props.type} variant={props.type} color={props.type == "subtitle1"?"textSecondary":""}>
        {props.content}
      </Typography>
    </div>
  );
}
