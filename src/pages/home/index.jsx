import React from "react";

import useStyles from "./styles";
import Page from "../../components/page";
import Footer from "../../components/footer";

function Home() {
  const classes = useStyles();

  return (
    <Page>
      <div className={classes.banner}></div>
      <Footer />
    </Page>
  );
}

export default Home;
