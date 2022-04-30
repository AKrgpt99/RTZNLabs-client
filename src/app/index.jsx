import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RequireAuth from "../util/RequireAuth";
import Layout from "../components/layout";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Create from "../pages/create";
import Login from "../pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route index element={<Home />} />
          <Route
            path="projects"
            element={
              <RequireAuth>
                <Projects />
              </RequireAuth>
            }
          />
          <Route
            path="create"
            element={
              <RequireAuth>
                <Create />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
