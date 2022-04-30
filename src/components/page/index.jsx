import React from "react";

import useStyles from "./styles";

function Page({ children }) {
  const classes = useStyles();

  return <div className={classes.page}>{children}</div>;
}

export default Page;
