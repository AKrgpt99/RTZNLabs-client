import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tooltip: {
    position: "relative",
    display: "flex",
    justifyContent: "center",

    "&:hover #tooltiptext": {
      opacity: 1,
    },
  },

  tooltiptext: {
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    padding: {
      left: "10px",
      right: "10px",
    },
    fontSize: "12px",
    height: "30px",
    opacity: 0,
    backgroundColor: "#808080EE",
    color: "white",
    textAlign: "center",
    position: "absolute",
    zIndex: 1,
    top: "-35px",
    pointerEvents: "none",

    "&:after": {
      content: "' '",
      position: "absolute",
      top: "100%",
      left: "50%",
      marginLeft: "-5px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderColor: "#808080EE transparent transparent transparent",
    },
  },
});

export default useStyles;
