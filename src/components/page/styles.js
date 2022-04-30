import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  page: {
    width: "100%",
    minHeight: "calc(100vh - 150px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    paddingTop: "150px",
  },
});

export default useStyles;
