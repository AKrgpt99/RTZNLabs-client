import React from "react";
import { Outlet } from "react-router-dom";

import useStyles from "./styles";
import Page from "../../components/page";
import SettingsHeader from "../../components/settingsHeader";

function Settings() {
  const classes = useStyles();

  return (
    <Page>
      <div className={classes.settingsPageContainer}>
        <SettingsHeader />
        <div className={classes.settingsPageContent}>
          <Outlet />
        </div>
      </div>
    </Page>
  );
}

export default Settings;
