import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

import Logo from "../../assets/images/svg/logo-dark.svg";
import HomeIcon from "../../assets/icons/svg/home.svg";
import Projects from "../../assets/icons/svg/projects.svg";
import Add from "../../assets/icons/svg/add.svg";
import useStyles from "./styles";

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
          <img src={HomeIcon} alt="" />
          <p className={classes.navButtonText}>Home</p>
        </Link>
        <Link
          to="/projects"
          className={clsx(
            classes.navButton,
            location.pathname === "/projects" ? classes.navButtonSelected : "",
            "transition"
          )}
        >
          <img src={Projects} alt="" style={{ margin: "3.125px" }} />
          <p className={classes.navButtonText}>Projects</p>
        </Link>
        <Link
          to="/create"
          className={clsx(
            classes.navButton,
            location.pathname === "/create" ? classes.navButtonSelected : "",
            "transition"
          )}
        >
          <img src={Add} alt="" />
          <p className={classes.navButtonText}>Create</p>
        </Link>
      </div>
      <Link className={clsx(classes.logo, "transition")} to="/">
        <img src={Logo} alt="RTZN Labs" />
      </Link>
      <div>
        {user ? (
          <div className={classes.profileButton}>
            {user.address.substr(0, 5) + "..." + user.address.substr(-5, 5)}
          </div>
        ) : (
          <Link
            className={clsx(
              classes.loginButton,
              location.pathname === "/login" ? classes.loginButtonSelected : "",
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
