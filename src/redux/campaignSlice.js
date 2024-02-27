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
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
  },
});

export const { setCampaignData, setSearchTerm, setMessage } =
  campaignSlice.actions;

// get data from store
export const selectCampaignData = (state) => state.campaign.campaignData;
export const selectSearchTerm = (state) => state.campaign.searchTerm;
export const selectSingleCampaign = (state, id) => {
  console.log(id, state.campaign.campaignData);
  return state.campaign.campaignData.find((c) => {
    return c.id === id;
  });
};
export const selectMessage = (state) => state.campaign.message;

export default campaignSlice.reducer;
