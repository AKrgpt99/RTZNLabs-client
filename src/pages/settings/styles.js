import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  settingsPageContainer: {
    width: "100%",
    height: "calc(100vh - 150px)",
    display: "flex",
  },
  settingsPageContent: {
    width: "calc(100% - 300px)",
    height: "100%",
  },
});

export default useStyles;
