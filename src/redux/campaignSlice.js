import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  // mutate the store > adding, deleting, updating
  reducers: {
    setCampaignData: (state, { payload }) => {
      state.campaignData = payload;
    },
  },
});

export const { setCampaignData } = campaignSlice.actions;

// get data from store
export const selectCampaignData = (state) => state.campaign.campaignData;

export default campaignSlice.reducer;
