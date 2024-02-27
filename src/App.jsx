import React, { useEffect } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";
import { setCampaignData } from "./redux/campaignSlice";
import Interface from "./components/Interface";

const App = () => {
  const dispatch = useDispatch();

  const getInitialCompaigns = async () => {
    const { data } = await axios.get(
      "https://api.justgiving.com/41317175/v1/fundraising/autocomplete"
    );

    data.Results.forEach((el, idx) => {
      el.id = idx;
    });

    dispatch(setCampaignData(data.Results));
  };

  useEffect(() => {
    getInitialCompaigns();
  }, []);

  return (
    <>
      <Interface />
    </>
  );
};

export default App;
