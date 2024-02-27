// No need to import React because it is in the current context

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

import { Routes, Route } from "react-router-dom";
import CampaignDetails from "./CampaignDetails";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/campaignSlice";

const Interface = () => {
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <Header />
        <button
          onClick={() => dispatch(setMessage("Hello From Interface Component"))}
        >
          Click me
        </button>
      </header>
      <main>
        <Routes>
          <Route path="/campaign/:id" element={<CampaignDetails />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Interface;
