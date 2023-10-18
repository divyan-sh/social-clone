import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import routes from "./utils/routes";
import HomePage from "./pages/Home.page";
import SignInPage from "./pages/SignIn.page";
import RequireAuth from "./middlewares/RequireAuth";

const App = () => {
  return (
    <Routes>
      <Route path={routes.ROOT} element={<Layout />}>
        {/* Public Routes */}
        <Route path={routes.SIGNIN} element={<SignInPage />} />

        {/* Protected Routes */}
        <Route
          path={routes.ROOT}
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
