import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dropdown: {
    display: "none",
    position: "absolute",
    zIndex: 1,
  },
  showDropdown: {
    display: "flex",
    flexDirection: "column",
  },
});

export default useStyles;
