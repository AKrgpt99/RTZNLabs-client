import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "../components/authProvider";
import RequireAuth from "../components/requireAuth";
import Layout from "../components/layout";
import Home from "../pages/home";
import Community from "../pages/community";
import Create from "../pages/create";
import Login from "../pages/login";
import Profile from "../pages/profile";
import PublicProfile from "../pages/publicProfile";
import Report from "../pages/report";
import ReportUser from "../pages/report/user";
import ReportProject from "../pages/report/project";
import Settings from "../pages/settings";
import ProfileSettings from "../pages/settings/profile";
import BlockchainSettings from "../pages/settings/blockchain";
import Support from "../pages/settings/support";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route index element={<Home />} />
            <Route path="community" element={<Community />} />
            <Route path=":address" element={<PublicProfile />} />
            <Route
              path="create"
              element={
                <RequireAuth>
                  <Create />
                </RequireAuth>
              }
            />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="settings"
              element={
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              }
            >
              <Route index element={<ProfileSettings />} />
              <Route path="blockchain" element={<BlockchainSettings />} />
              <Route path="support" element={<Support />} />
            </Route>
            <Route
              path="report"
              element={
                <RequireAuth>
                  <Report />
                </RequireAuth>
              }
            >
              <Route path="u/:address" element={<ReportUser />} />
              <Route path="p/:projectId" element={<ReportProject />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
