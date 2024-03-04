import { configureStore } from "@reduxjs/toolkit";
import campaignReducer from "./campaignSlice";
import accountReducer from "./accountSlice";

export const store = configureStore(
  {
    reducer: {
      campaign: campaignReducer,
      account: accountReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
