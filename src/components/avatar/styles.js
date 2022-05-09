import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  avatar: {
    borderRadius: "50%",
    backgroundColor: "#80808080",
    objectFit: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default useStyles;
