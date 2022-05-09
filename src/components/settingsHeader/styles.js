import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  settingsHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    width: "300px",
    height: "100%",
    backgroundColor: "#80808015",
    "& a": {
      width: "calc(100% - 100px)",
      height: "60px",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      gap: "20px",
      opacity: 0.75,
      color: "#404040",
      padding: {
        left: "50px",
        right: "50px",
      },
      "& img": {
        width: "18px",
        height: "18px",
        objectFit: "contain",
        filter:
          "invert(52%) sepia(0%) saturate(0%) hue-rotate(104deg) brightness(97%) contrast(85%)",
      },
      "&.selected": {
        backgroundColor: "#9B41B2",
        color: "white",
        opacity: 1,
        "& img": {
          filter:
            "invert(100%) sepia(0%) saturate(2%) hue-rotate(111deg) brightness(108%) contrast(101%)",
        },
      },
      "&:hover": {
        opacity: 1,
      },
    },
  },
  settingsHeaderTitle: {
    width: "calc(100% - 100px)",
    height: "80px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    fontSize: "12px",
    padding: {
      left: "50px",
      right: "50px",
    },
    "& h4": {
      fontWeight: 900,
      color: "#808080",
    },
  },
});

export default useStyles;
