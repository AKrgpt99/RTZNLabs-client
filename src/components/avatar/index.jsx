import React, { useEffect } from "react";
import Jazzicon from "@metamask/jazzicon";
import { useSelector } from "react-redux";
import clsx from "clsx";

import useStyles from "./styles";

function Avatar({ width, id, src, address }) {
  const classes = useStyles();

  useEffect(() => {
    if (!src) {
      const jazzicon = Jazzicon(width, parseInt(address.slice(2, 10), 16));
      jazzicon.style.borderRadius = `${width}px`;
      document.getElementById(`${id}`).appendChild(jazzicon);
    }
  }, [src]);

  return !src ? (
    <div id={id} className={clsx(classes.avatar, "transition")}></div>
  ) : (
    <img
      src={src}
      className={clsx(classes.avatar, "transition")}
      alt="User profile image"
    />
  );
}

export default Avatar;
