import { configureStore } from "@reduxjs/toolkit";
import campaignReducer from "./campaignSlice";

export const store = configureStore(
  {
    reducer: {
      campaign: campaignReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
