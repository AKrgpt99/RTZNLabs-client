import React, { useEffect } from "react";
import clsx from "clsx";

import useStyles from "./styles";

function StickyDropdown({ children, buttonId, show, className }) {
  const classes = useStyles();

  useEffect(() => {
    const adjustDropdown = () => {
      const shareButton = document.getElementById(buttonId);
      const shareDropdown = document.getElementById("shareDropdown");
      const shareButtonPosition = shareButton.getBoundingClientRect();

      if (
        window.scrollY <
        270 - (window.innerHeight - shareButtonPosition.top)
      ) {
        shareDropdown.style.position = "fixed";
        shareDropdown.style.backgroundColor = "white";
        shareDropdown.style.top = "unset";
        shareDropdown.style.bottom = "20px";
      } else {
        shareDropdown.style.position = "absolute";
        shareDropdown.style.backgroundColor = "white";
        shareDropdown.style.bottom = "unset";
        shareDropdown.style.top = "40px";
      }
    };

    adjustDropdown();
    window.onscroll = adjustDropdown;
    return () => {
      window.onscroll = function () {};
    };
  }, []);

  return (
    <div
      id="shareDropdown"
      className={clsx(
        classes.dropdown,
        show && classes.showDropdown,
        className
      )}
    >
      {children}
    </div>
  );
}

export default StickyDropdown;
