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
    updateExistingCampaign: (state, { payload }) => {
      const indexOf = state.campaignData.findIndex((camp) => {
        return camp.id === payload.campaign.id;
      });

      state.campaignData[indexOf].contributed += Number(payload.value);
    },
  },
});

export const {
  setCampaignData,
  setSearchTerm,
  setMessage,
  updateExistingCampaign,
} = campaignSlice.actions;

// get data from store
export const selectCampaignData = (state) => state.campaign.campaignData;
export const selectSearchTerm = (state) => state.campaign.searchTerm;
export const selectSingleCampaign = (id) => (state) => {
  return state.campaign.campaignData.find((c) => {
    return c.id === Number(id);
  });
};
export const selectMessage = (state) => state.campaign.message;

export default campaignSlice.reducer;
