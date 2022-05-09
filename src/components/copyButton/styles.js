import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  copyButton: {
    cursor: "pointer",
    "&:hover": {
      color: "#808080CC",
    },
  },
});

export default useStyles;
