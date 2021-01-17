import React from 'react';
import CardContent from '@material-ui/core/CardContent';

//ATOMS
import InterestLinkButton from '../../atoms/means/interestLinkButton';
import InterestLinkText from '../../atoms/means/interestLinkText';

export default function InterestLinkContent(props) {
  return (
    <CardContent className={props.className}>
      <InterestLinkText content={props.name} type={"h5"}/>
      <InterestLinkText content={props.description} type={"subtitle1"}/>
    </CardContent>
  );
}
