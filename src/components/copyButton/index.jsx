import React, { useState } from "react";

import Tooltip from "../tooltip";
import useStyles from "./styles";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

function CopyButton({ children, copyValue }) {
  const classes = useStyles();
  const [copyText, setCopyText] = useState("Copy");

  return (
    <Tooltip text={copyText}>
      <button
        onClick={useCopyToClipboard(copyValue, () => {
          setCopyText("Copied!");
          setTimeout(() => {
            setCopyText("Copy");
          }, 1000);
        })}
        className={classes.copyButton}
      >
        {children}
      </button>
    </Tooltip>
  );
}

export default CopyButton;
