import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  moreButtonContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  moreButton: {
    width: "30px",
    height: "30px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },

  moreDropdown: {
    position: "absolute",
    display: "none",
    top: "40px",
    boxShadow: "5px 5px 20px #80808080",
    zIndex: 1,
    "& a": {
      width: "calc(100% - 40px)",
      height: "60px",
      padding: {
        left: "20px",
        right: "20px",
      },
      "&:hover": {
        backgroundColor: "#80808020",
      },
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      gap: "15px",
    },
    "& a img": {
      width: "15px",
      height: "15px",
      objectFit: "contain",
    },
    "& a p": {
      fontWeight: 600,
      fontSize: "12px",
    },
  },

  show: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default useStyles;
