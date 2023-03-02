import React, { useEffect } from "react";
import { navigate } from "gatsby";
import AuthGuard from "manager/guardManager/AuthGuard";

const App = () => {
  return <AuthGuard component={<></>} />;
};

export default App;
