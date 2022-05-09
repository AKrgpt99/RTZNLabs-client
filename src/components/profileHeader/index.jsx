import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import useStyles from "./styles";
import LayersIcon from "../../assets/icons/svg/layers.svg";
import ContractIcon from "../../assets/icons/svg/contract.svg";
import GiftsIcon from "../../assets/icons/svg/gifts.svg";
import StoreIcon from "../../assets/icons/svg/store.svg";

function ProfileHeader() {
  const classes = useStyles();
  const location = useLocation();
  const search = location.search.split("t=");
  const selectedTab = location.search.split("t=")[search.length - 1];

  return (
    <div>
      <div className={classes.profileHeaderContainer}>
        <Link
          to=""
          className={clsx(
            classes.profileTab,
            "transition",
            selectedTab === "" ? "selected" : ""
          )}
        >
          <img src={LayersIcon} alt="" />
          <p>All Projects</p>
        </Link>
        <Link
          to="?t=contracts"
          className={clsx(
            classes.profileTab,
            "transition",
            selectedTab === "contracts" ? "selected" : ""
          )}
        >
          <img src={ContractIcon} alt="" />
          <p>Contracts</p>
        </Link>
        <Link
          to="?t=mints"
          className={clsx(
            classes.profileTab,
            "transition",
            selectedTab === "mints" ? "selected" : ""
          )}
        >
          <img src={GiftsIcon} alt="" />
          <p>Mints</p>
        </Link>
        <Link
          to="?t=marketplaces"
          className={clsx(
            classes.profileTab,
            "transition",
            selectedTab === "marketplaces" ? "selected" : ""
          )}
        >
          <img src={StoreIcon} alt="" />
          <p>Marketplaces</p>
        </Link>
      </div>
    </div>
  );
}

export default ProfileHeader;
