import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  shareButtonContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  shareButton: {
    width: "30px",
    height: "30px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },

  shareDropdown: {
    width: "200px",
    boxShadow: "5px 5px 20px #80808080",
    backgroundColor: "white",
    "& button": {
      width: "100%",
    },
    "& a": {
      width: "calc(100% - 40px)",
    },
    "& a, & button": {
      padding: {
        left: "20px",
        right: "20px",
      },
      height: "60px",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      gap: "15px",
      "&:hover": {
        backgroundColor: "#80808020",
      },
    },
    "& a img, & button img": {
      width: "25px",
      height: "25px",
      objectFit: "contain",
    },
    "& a p, & button p": {
      fontWeight: 600,
      fontSize: "12px",
    },
  },
});

export default useStyles;
