import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import useStyles from "./styles";
import UserIcon from "../../assets/icons/svg/user.svg";
import EthereumIcon from "../../assets/icons/svg/ethereum.svg";
import ShieldIcon from "../../assets/icons/svg/shield.svg";

function SettingsHeader() {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname.split("settings");
  const selected = path[path.length - 1];

  return (
    <div className={classes.settingsHeaderContainer}>
      <div className={classes.settingsHeaderTitle}>
        <h4>SETTINGS</h4>
      </div>
      <Link to="" className={clsx("transition", selected === "" && "selected")}>
        <img src={UserIcon} alt="Profile settings" />
        <p>Profile</p>
      </Link>
      <Link
        to="blockchain"
        className={clsx(
          "transition",
          selected.includes("blockchain") && "selected"
        )}
      >
        <img src={EthereumIcon} alt="Blockchain settings" />
        <p>Blockchain</p>
      </Link>
      <Link
        to="support"
        className={clsx(
          "transition",
          selected.includes("support") && "selected"
        )}
      >
        <img src={ShieldIcon} alt="Support" />
        <p>Support</p>
      </Link>
    </div>
  );
}

export default SettingsHeader;
