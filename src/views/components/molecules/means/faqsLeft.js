import React from 'react';
import { Tab, Tabs } from '@material-ui/core/';

function handleProps (index) {
  return {
    id: `vertical-tab-${index}`, 'aria-controls' : `vertical-tabpanel-${index}`,
  };
}

export default function FaqsLeft(props) {

  return (
      <Tabs orientation="vertical" variant="scrollable" value={props.value} onChange={props.handleChange} className={props.className}>
        {
          props.faqs.map((faq, index) => (
            <Tab label={faq.name} {...handleProps(index)}/>
          ))
        }
      </Tabs>
  );
}
