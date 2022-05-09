import React from "react";
import { Outlet } from "react-router-dom";

import Page from "../../components/page";

function Report() {
  return (
    <Page>
      <Outlet />
    </Page>
  );
}

export default Report;
