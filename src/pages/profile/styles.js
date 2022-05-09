import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  profileContainer: {
    width: "100%",
    height: "fit-content",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContainer: {
    width: "100%",
    minHeight: "250px",
    maxHeight: "400px",
    backgroundColor: "#80808040",
    "& img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },
  imageContainer: {
    width: "125px",
    height: "125px",
    borderRadius: "50%",
    backgroundColor: "#80808080",
    top: "-62.5px",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoContainer: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    gap: 0,
    padding: {
      top: "80px",
    },
  },

  userActionsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "20px",
    gap: "20px",
  },

  userActionButton: {
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "18px",
      height: "18px",
      objectFit: "contain",
    },
  },

  emptyUsername: {
    width: "100%",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    "& div": {
      width: "120px",
      height: "100%",
      backgroundColor: "#80808040",
    },
  },

  usernameContainer: {
    width: "100%",
    textAlign: "center",
    "& h2": {
      margin: 0,
    },
  },

  addressContainer: {
    fontWeight: 600,
    padding: {
      top: "15px",
    },
    "& p": {
      color: "#808080CC",
      margin: 0,
    },
    display: "flex",
    gap: "10px",
  },

  joinedContainer: {
    "& p": {
      color: "#808080CC",
    },
  },

  profileTabsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#80808015",
    margin: {
      top: "40px",
    },
    gap: "20px",
  },
});

export default useStyles;
