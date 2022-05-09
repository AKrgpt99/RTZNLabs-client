import React from "react";
import clsx from "clsx";

import useStyles from "./styles";

function Tooltip({ children, text }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.tooltip, "transition")}>
      {children}
      <div id="tooltiptext" className={clsx(classes.tooltiptext, "transition")}>
        {text}
      </div>
    </div>
  );
}

export default Tooltip;
