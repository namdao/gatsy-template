import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createStore } from "./src/store";
// Template theme
import { Helmet } from "react-helmet";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./src/utils/emotionCache";
import CommonManager from "./src/manager/commonManager";
import MotionLazyContainer from "./src/components/animate/MotionLazyContainer";
import ThemeProvider from "./src/theme";
import ThemeSettings from "./src/manager/settingsManager/ThemeSettings";
import SnackbarProvider from "./src/components/snackbar";

const clientSideEmotionCache = createEmotionCache();

export const wrapRootProvider = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore();
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
        <CommonManager />
      </PersistGate>
    </Provider>
  );
};

export const wrapPageProvider = ({ element }) => {
  const { emotionCache = clientSideEmotionCache } = element;
  return (
    <CacheProvider value={emotionCache}>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <MotionLazyContainer>
        <ThemeProvider>
          <ThemeSettings>
            <SnackbarProvider>{element}</SnackbarProvider>
          </ThemeSettings>
        </ThemeProvider>
      </MotionLazyContainer>
    </CacheProvider>
  );
};
