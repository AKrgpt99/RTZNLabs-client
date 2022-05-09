import React, { useRef, useState } from "react";

import useStyles from "./styles";
import RTZNLogo from "../../assets/icons/svg/logo.svg";
import FacebookLogo from "../../assets/icons/svg/facebook.svg";
import TwitterLogo from "../../assets/icons/svg/twitter.svg";
import TelegramLogo from "../../assets/icons/svg/telegram.svg";
import ShareIcon from "../../assets/icons/svg/share.svg";
import Tooltip from "../tooltip";
import StickyDropdown from "../stickyDropdown";
import useOutsideClickListener from "../../hooks/useOutsideClickListener";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

function ShareButton({ address }) {
  const classes = useStyles();
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef();
  const shareText = "Check out this profile on RTZN Labs";
  const shareUrl = `https://rtzn.io/${address}`;

  useOutsideClickListener(ref, () => setShowDropdown(false));

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={classes.shareButtonContainer} ref={ref}>
      <Tooltip text="Share">
        <button
          id="shareButton"
          className={classes.shareButton}
          onClick={handleDropdown}
        >
          <img src={ShareIcon} alt="Share to social media" />
        </button>
      </Tooltip>
      <StickyDropdown
        buttonId="shareButton"
        show={showDropdown}
        className={classes.shareDropdown}
      >
        <button
          onClick={useCopyToClipboard(shareUrl, () => setShowDropdown(false))}
          className="transition"
        >
          <img src={RTZNLogo} alt="" />
          <p>Copy Link</p>
        </button>
        <a
          href={`http://www.facebook.com/share.php?u=${shareUrl}&quote=${shareText}`}
          className="transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={FacebookLogo}
            alt="Share to Facebook"
            style={{
              filter:
                "invert(33%) sepia(13%) saturate(4453%) hue-rotate(191deg) brightness(103%) contrast(76%)",
            }}
          />
          <p>Share to Facebook</p>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}&via=RTZNLabs`}
          className="transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={TwitterLogo}
            alt="Share to Twitter"
            style={{
              filter:
                "invert(72%) sepia(57%) saturate(6236%) hue-rotate(162deg) brightness(96%) contrast(104%)",
            }}
          />
          <p>Share to Twitter</p>
        </a>
        <a
          href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`}
          className="transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={TelegramLogo}
            alt="Share to Telegram"
            style={{
              filter:
                "invert(53%) sepia(87%) saturate(1582%) hue-rotate(168deg) brightness(92%) contrast(85%)",
            }}
          />
          <p>Share to Telegram</p>
        </a>
      </StickyDropdown>
    </div>
  );
}

export default ShareButton;
