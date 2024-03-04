import { createSlice } from "@reduxjs/toolkit";

import sha256 from "sha256";
import { saveStore, getStore } from "./diskUtils";

const initialState = {
  screen: 0,
  user: "",
  password: "",
  donations: [
    { id: 1, value: 100, date: Date.now() },
    { id: 2, value: 150, date: Date.now() },
    { id: 9, value: 500, date: Date.now() },
  ],
};

const diskData = getStore();

export const campaignSlice = createSlice({
  name: "account",
  initialState: diskData ? diskData : initialState,
  reducers: {
    setNewUser: (state, { payload }) => {
      state.password = sha256(payload.password + "randomWord");
      state.user = payload.email;
      saveStore(state);
    },
    setScreen: (state, { payload }) => {
      state.screen = payload;
      saveStore(state);
    },
    setLogginIn: (state) => {
      state.loggedIn = !state.loggedIn;
      saveStore(state);
    },
    setNewDonation: (state, { payload }) => {
      state.donations.push({
        id: payload.campaign.id,
        value: payload.value,
        date: Date.now(),
      });
      saveStore(state);
    },
  },
});

export const { setNewUser, setScreen } = campaignSlice.actions;

export const selectScreen = (state) => state.account.screen;
export const selectUser = (state) => state.account.user;
export const selectLoggedIn = (state) => state.account.loggedIn;
export const selectDonations = (state) => state.account.donations;

export default campaignSlice.reducer;
