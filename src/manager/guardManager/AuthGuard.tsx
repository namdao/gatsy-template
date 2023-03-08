import React from "react";
import { PATH_AUTH } from "constant/routeConstant";
import { navigate } from "gatsby";
import { AuthSelector } from "scenes/auth/redux/slice";
import { useAppSelector } from "store";
import { isBrowser } from "utils/utility";

type AuthGuardProps = {
  component: React.ReactNode | any;
  path?: string;
};
const AuthGuard = ({ component: Component, ...rest }: AuthGuardProps) => {
  const token = useAppSelector(AuthSelector.getToken);
  if (token === "" || !isBrowser) {
    navigate(PATH_AUTH.login);
    return null;
  }
  return <Component {...rest} />;
};

export default AuthGuard;
