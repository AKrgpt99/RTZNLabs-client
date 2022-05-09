import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    width: "calc(100% - 100px)",
    height: "150px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    paddingLeft: "50px",
    paddingRight: "50px",
    backgroundColor: "#ffffffcc",
    backdropFilter: "blur(10px)",
    position: "fixed",
    zIndex: "99",
    boxShadow: "0 0 20px #80808080",
  },

  logo: {
    position: "absolute",
    width: "150px",
    left: "calc(50% - 75px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.75,
    "&:hover": {
      opacity: 1,
    },
  },

  loginButton: {
    width: "90px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: "30px",
    backgroundColor: "#808080CC",
    "&:hover": {
      backgroundColor: "#808080",
    },
  },

  loginButtonSelected: {
    backgroundColor: "#9B41B2",
  },

  profileButton: {
    width: "fit-content",
    height: "30px",
    display: "flex",
    padding: {
      left: "3px",
      right: "10px",
    },
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "30px",
    gap: "10px",
    color: "#808080",
    backgroundColor: "#80808040",
    "&:hover": {
      color: "white",
      backgroundColor: "#808080",
      "& #header": {
        border: "2px solid white",
      },
    },
    "& #header": {
      border: "2px solid #9B41B2",
    },
  },

  profileButtonSelected: {
    color: "white",
    backgroundColor: "#9B41B2",
    "& #header": {
      border: "2px solid white !important",
    },
  },

  navButtonContainer: {
    width: "fit-content",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },

  navButton: {
    width: "75px",
    height: "75px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0.75,
    "&:hover": {
      opacity: 1,
    },
    "& img": {
      width: "25px",
      height: "25px",
      filter:
        "invert(52%) sepia(0%) saturate(0%) hue-rotate(104deg) brightness(97%) contrast(85%)",
    },
  },

  navButtonSelected: {
    opacity: 1,
    "& p": {
      color: "#9B41B2",
    },
    "& img": {
      filter:
        "invert(33%) sepia(37%) saturate(2488%) hue-rotate(260deg) brightness(86%) contrast(87%)",
    },
  },

  jazziconContainer: {
    width: "20px",
    height: "20px",
    borderRadius: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #9B41B2",
  },

  navIconContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default useStyles;
