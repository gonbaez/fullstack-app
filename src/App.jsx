import React, { useEffect } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMessage,
  setCampaignData,
  setMessage,
} from "./redux/campaignSlice";
import Interface from "./components/Interface";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./css/App.css";

const App = () => {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);

  useEffect(() => {
    if (!message) return;

    toast(message);
    setTimeout(() => {
      dispatch(setMessage(""));
    }, 300);
  }, [message]);

  const getInitialCompaigns = async () => {
    const { data } = await axios.get(
      "https://api.justgiving.com/41317175/v1/fundraising/autocomplete"
    );

    data.Results.forEach((el, idx) => {
      el.id = idx;
      el.supporters = Math.floor(Math.random() * 50);
      el.required = Math.floor(Math.random() * 9000);
      el.contributed = Math.floor(Math.random() * el.required);
    });

    dispatch(setCampaignData(data.Results));
  };

  useEffect(() => {
    getInitialCompaigns();
  }, []);

  return (
    <>
      <ToastContainer />
      <Interface />
    </>
  );
};

export default App;
