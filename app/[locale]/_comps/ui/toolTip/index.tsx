import { Tooltip as AndTooltip } from "antd";
import React from "react";

const Tooltip = ({ children, title }) => {
  return (
    <AndTooltip placement="topLeft" color="#9B7029" title={title}>
      {children}
    </AndTooltip>
  );
};

export default Tooltip;
