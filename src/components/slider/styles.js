import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sliderContainer: {
    width: "100% !important",
    height: "625px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    position: "relative",
  },

  slider: {
    width: "100%",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      height: "500px",
      objectFit: "contain",
    },
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },

  sliderTitle: {
    width: "calc(100% - 200px)",
    textAlign: "left",
    fontSize: "32px",
    color: "#9B41B2",
    fontWeight: 900,
    padding: {
      left: "100px",
      right: "100px",
    },
    margin: 0,
  },

  sliderSubtitle: {
    width: "calc(100% - 200px)",
    textAlign: "left",
    fontSize: "16px",
    margin: 0,
    padding: {
      left: "100px",
      right: "100px",
    },
  },

  sliderIndicators: {
    display: "flex",
    gap: "5px",
    width: "100%",
    height: "5px",
    marginTop: "50px",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },

  sliderIndicator: {
    width: "50px",
    height: "100%",
    backgroundColor: "#80808080",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#808080",
    },
  },

  sliderIndicatorSelected: {
    backgroundColor: "#9B41B2",
  },
});

export default useStyles;
