import React from "react";

import useStyles from "./styles";
import Page from "../../components/page";

function Home() {
  const classes = useStyles();
  return (
    <Page>
      <div className={classes.banner}></div>
    </Page>
  );
}

export default Home;
