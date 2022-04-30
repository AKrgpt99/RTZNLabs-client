import React from "react";
import clsx from "clsx";

import Logo from "../../assets/images/svg/logo-dark.svg";
import DiscordLogo from "../../assets/icons/svg/discord.svg";
import InstagramLogo from "../../assets/icons/svg/instagram.svg";
import TwitterLogo from "../../assets/icons/svg/twitter.svg";
import useStyles from "./styles";

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerLogoContainer}>
        <img src={Logo} alt="RTZN Labs" />
        <p className={classes.footerCompanyDescription}>
          We create <b>Trust & Emotion.</b>
          <br />
          Based in <b>Toronto.</b>
          <br />
          Available <b>Worldwide.</b>
        </p>
        <div className={classes.socialsContainer}>
          <a href="#" className={classes.socialIcon}>
            <img src={DiscordLogo} alt="RTZN Discord" />
          </a>
          <a href="#" className={classes.socialIcon}>
            <img src={InstagramLogo} alt="RTZN Instagram" />
          </a>
          <a href="#" className={classes.socialIcon}>
            <img src={TwitterLogo} alt="RTZN Twitter" />
          </a>
        </div>
      </div>
      <div className={classes.footerLinksContainer}>
        <div className={classes.footerLinksContainer__1}>
          <div className={classes.footerLinksSection}>
            <p className={classes.footerTitle}>Categories</p>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
          </div>
        </div>
        <div className={classes.footerLinksContainer__2}>
          <div className={classes.footerLinksSection}>
            <p className={classes.footerTitle}>Company</p>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
          </div>
          <div className={classes.footerLinksSection}>
            <p className={classes.footerTitle}>Resources</p>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
            <a className={clsx(classes.footerLink, "transition")} href="#">
              Link to resource
            </a>
          </div>
        </div>
      </div>
      <div className={classes.copyrightContainer}>
        <p>&copy; 2022 RTZN Labs</p>
        <div className={classes.legalLinksContainer}>
          <a className={classes.legalLink} href="#">
            Terms & Conditions
          </a>
          <a className={classes.legalLink} href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
