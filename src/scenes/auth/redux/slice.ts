import { createSlice } from "@reduxjs/toolkit";
import { PersistConfig } from "redux-persist/lib/types";
import { persistReducer } from "redux-persist";
import { RootState } from "store";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const initialState = {
  count: 0,
  token: "",
};

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increase: (state, action) => {
      const { payload } = action;
      state.count = state.count + payload;
    },
  },
});

// Selectors
const getCount = (state: RootState) => state.data.auth.count;
const getToken = (state: RootState) => state.data.auth.token;
export const AuthSelector = { getCount, getToken };

// Actions
export const authActions = authSlice.actions;

// Reducers
const persistConfig: PersistConfig<typeof initialState> = {
  key: "auth:slice",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
export default persistReducer(persistConfig, authSlice.reducer);
// export default authSlice.reducer;
