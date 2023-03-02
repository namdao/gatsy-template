import React from "react";
import { Router } from "@reach/router";
import { PATH_APP } from "constant/routeConstant";
import AuthGuard from "manager/guardManager/AuthGuard";
const Auth = () => (
  <Router>
    <AuthGuard path={PATH_APP.profile} component={<h1>profile</h1>} />
  </Router>
);

export default Auth;
