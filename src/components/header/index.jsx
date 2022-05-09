import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

import Logo from "../../assets/images/svg/logo-dark.svg";
import HouseIcon from "../../assets/icons/svg/house.svg";
import EarthIcon from "../../assets/icons/svg/earth.svg";
import PlusIcon from "../../assets/icons/svg/plus.svg";
import useStyles from "./styles";
import Avatar from "../avatar";

function Header() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.currentUser);
  const location = useLocation();

  return (
    <div className={classes.header}>
      <div className={classes.navButtonContainer}>
        <Link
          to="/"
          className={clsx(
            classes.navButton,
            location.pathname === "/" ? classes.navButtonSelected : "",
            "transition"
          )}
        >
          <div className={classes.navIconContainer}>
            <img src={HouseIcon} alt="" />
          </div>
          <p className={classes.navButtonText}>Home</p>
        </Link>
        <Link
          to="/community"
          className={clsx(
            classes.navButton,
            location.pathname.includes("community")
              ? classes.navButtonSelected
              : "",
            "transition"
          )}
        >
          <div className={classes.navIconContainer}>
            <img src={EarthIcon} alt="" />
          </div>
          <p className={classes.navButtonText}>Community</p>
        </Link>
        <Link
          to="/create"
          className={clsx(
            classes.navButton,
            location.pathname.includes("create")
              ? classes.navButtonSelected
              : "",
            "transition"
          )}
        >
          <div className={classes.navIconContainer}>
            <img src={PlusIcon} alt="" />
          </div>
          <p className={classes.navButtonText}>Create</p>
        </Link>
      </div>
      <Link className={clsx(classes.logo, "transition")} to="/">
        <img src={Logo} alt="RTZN Labs" />
      </Link>
      <div>
        {user ? (
          <Link
            to="/profile"
            className={clsx(
              classes.profileButton,
              location.pathname.includes("profile")
                ? classes.profileButtonSelected
                : "",
              "transition"
            )}
          >
            <Avatar
              src={user.image !== "" ? user.image : null}
              width={20}
              id="header"
              address={user.address}
            />
            {user.address.substr(0, 5) + "..." + user.address.substr(-5, 5)}
          </Link>
        ) : (
          <Link
            className={clsx(
              classes.loginButton,
              location.pathname.includes("login")
                ? classes.loginButtonSelected
                : "",
              "transition"
            )}
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
