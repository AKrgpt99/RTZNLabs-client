import React from "react";

import useStyles from "./styles";

function ProfileSettings() {
  const classes = useStyles();

  return (
    <div className={classes.settingsPageContainer}>
      <h2>Profile Settings</h2>
    </div>
  );
}

export default ProfileSettings;
