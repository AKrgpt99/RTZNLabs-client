import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footerContainer: {
    width: "calc(100% - 100px)",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "50px",
    paddingBottom: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    position: "relative",
  },

  footerLogoContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    marginBottom: "20px",
    gap: "10px",
  },

  footerCompanyDescription: {
    textAlign: "left",
    // fontSize: "14px",
    fontWeight: 400,
    lineHeight: "35px",
  },

  footerLinksContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "start",
    gap: "50px",
    marginBottom: "20px",
  },
  footerLinksContainer__1: {
    width: "fit-content",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "end",
    gap: "10px",
  },

  footerLinksContainer__2: {
    width: "fit-content",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "end",
    gap: "10px",
  },

  footerLinksSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "end",
    gap: "10px",
  },

  footerTitle: {
    fontSize: "18px",
    fontWeight: 800,
    marginBottom: "10px",
  },

  footerLink: {
    color: "#40404080",
    "&:hover": {
      color: "#9B41B2",
    },
  },

  copyrightContainer: {
    width: "calc(100% - 100px)",
    fontSize: "12px !important",
    paddingLeft: "50px",
    paddingRight: "50px",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    bottom: "10px",
    fontWeight: 600,
    "& a": {
      fontSize: "12px !important",
    },
  },

  legalLinksContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  legalLink: {
    color: "black",
  },

  socialsContainer: {
    display: "flex",
    gap: "10px",
  },

  socialIcon: {
    width: "30px",
    height: "30px",
    backgroundColor: "#80808080",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    "& img": {
      width: "15px",
      height: "15px",
    },
  },
});

export default useStyles;
