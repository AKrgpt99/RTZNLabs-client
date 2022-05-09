import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  profileHeaderContainer: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    margin: {
      top: "10px",
    },
  },

  profileTab: {
    width: "fit-content",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: {
      left: "10px",
      right: "10px",
    },
    opacity: 0.75,

    "&:hover": {
      opacity: 1,
    },

    "&.selected": {
      borderBottom: "4px solid #9B41B2",
      color: "#9B41B2",
      opacity: 1,
      "& img": {
        filter:
          "invert(33%) sepia(37%) saturate(2488%) hue-rotate(260deg) brightness(86%) contrast(87%)",
      },
    },

    "& img": {
      width: "20px",
      height: "20px",
      objectFit: "contain",
      filter:
        "invert(52%) sepia(0%) saturate(0%) hue-rotate(104deg) brightness(97%) contrast(85%)",
    },
  },
});

export default useStyles;
