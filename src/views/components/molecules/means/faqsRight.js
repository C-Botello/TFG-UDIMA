import React from 'react';

//ATOMS
import FaqsTabPanel from '../../atoms/means/faqsTabPanel';

export default function FaqsRight(props) {
  return (
      <div className="text-justify">
        {props.faqs.map((faq, index) => (
          <FaqsTabPanel value={props.value} index={index}>
            <p>{faq.description}</p>
          </FaqsTabPanel>
        ))}
      </div>
  );
}
