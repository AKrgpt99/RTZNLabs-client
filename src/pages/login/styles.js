import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  loginCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // gap: "20px",
    boxShadow: "5px 5px 20px #80808080",
    marginTop: "100px",
    borderRadius: "2px",
    width: "400px",
    padding: {
      top: "50px",
      bottom: "50px",
    },
  },

  hr: {
    width: "150px",
    height: "0.5px",
    border: "none",
    backgroundColor: "#C4C4C4",
  },

  loginWrapper: {
    display: "flex",
    width: "100%",
    height: "100%",
  },

  loginWrapperContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    justifyContent: "center",
    alignItems: "center",
  },

  loginButton: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "12px",
    backgroundColor: "#8080808A",
    "&:hover": {
      backgroundColor: "#9B41B2",
      color: "white",
    },
    cursor: "pointer",
  },
  loginTitle: {
    color: "#808080",
    fontSize: "32px",
    fontWeight: 900,
    textAlign: "center",
    padding: {
      left: "30px",
      right: "30px",
    },
  },
  loginSubtitle: {
    fontWeight: 500,
    width: "150px",
    textAlign: "center",
    color: "#80808080",
  },

  walletLogos: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    "& img": {
      width: "20px",
      height: "20px",
      objectFit: "contain",
    },
    marginTop: "10px",
    marginBottom: "50px",
  },
});

export default useStyles;
