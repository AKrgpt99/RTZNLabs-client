import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  page: {
    width: "100%",
    height: "calc(100vh - 150px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    position: "relative",
    margin: {
      top: "150px",
    },
  },
});

export default useStyles;
