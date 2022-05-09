import React, { useRef, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import EllipsisIcon from "../../assets/icons/svg/ellipsis.svg";
import Tooltip from "../tooltip";
import useOutsideClickListener from "../../hooks/useOutsideClickListener";
import FlagIcon from "../../assets/icons/svg/flag.svg";

function ReportButton({ address }) {
  const classes = useStyles();
  const ref = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useOutsideClickListener(ref, () => setShowDropdown(false));

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={classes.moreButtonContainer} ref={ref}>
      <Tooltip text="More">
        <button className={classes.moreButton} onClick={handleDropdown}>
          <img src={EllipsisIcon} alt="" />
        </button>
      </Tooltip>
      <div
        className={clsx(
          classes.moreDropdown,
          "transition",
          showDropdown && classes.show
        )}
      >
        <Link to={`/report/u/${address}`}>
          <img src={FlagIcon} alt="report this user" />
          <p>Report</p>
        </Link>
      </div>
    </div>
  );
}

export default ReportButton;
