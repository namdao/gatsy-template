import React from "react";
import { Router } from "@reach/router";
import { PATH_APP } from "constant/routeConstant";
import AuthGuard from "manager/guardManager/AuthGuard";
import DashboardScreen from "scenes/dashboard/screens/dashboard";
import NotFoundPage from "./404";
import ProfileScreen from "scenes/account/screens/profile";

const AppPages = () => {
  return (
    <Router>
      <AuthGuard path={PATH_APP.root} component={DashboardScreen} />
      <AuthGuard path={PATH_APP.profile} component={ProfileScreen} />
      <NotFoundPage default={true} />
    </Router>
  );
};

export default AppPages;
