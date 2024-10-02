import React from "react";
import Tooltip from "../toolTip";

const OverFlowTooltip = ({ text }) => {
  return (
    <Tooltip title={text?.length >= 12 ? text : null}>
      <span className="block truncate max-w-28">{text}</span>
    </Tooltip>
  );
};

export default OverFlowTooltip;
