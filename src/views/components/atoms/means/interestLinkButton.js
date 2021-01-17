import React from 'react';
import { IconButton, Tooltip, Zoom } from '@material-ui/core/';

//ICONS
import { MdOpenInNew, MdLink } from "react-icons/md";

export default function InterestLinkButton(props) {
  return (
    <div>
      <Tooltip TransitionComponent={Zoom} title={props.title} placement="top" arrow>
        {
          props.type == "newTab"?
            <IconButton onClick={()=>window.open(props.href)}>
              <MdOpenInNew/>
            </IconButton>
          :
            <IconButton onClick={()=>navigator.clipboard.writeText(props.href)}>
              <MdLink/>
            </IconButton>
        }
      </Tooltip>
    </div>
  );
}
