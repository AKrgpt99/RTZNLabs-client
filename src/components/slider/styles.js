import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sliderContainer: {
    width: "100% !important",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  slider: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      height: "500px",
      objectFit: "contain",
    },
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
    height: "5px",
    marginTop: "50px",
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
