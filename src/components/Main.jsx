import { useSelector } from "react-redux";
import { selectCampaignData, selectSearchTerm } from "../redux/campaignSlice";
import CampaignResults from "./CampaignResult";
import Search from "./Search";
import CampaignDetails from "./CampaignDetails";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const campaignData = useSelector(selectCampaignData);
  const searchTerm = useSelector(selectSearchTerm);

  if (!campaignData) {
    return <p>Loading...</p>;
  }

  let filtered = [...campaignData];

  if (searchTerm) {
    filtered = filtered.filter((c) => {
      const searchTermLC = searchTerm.toLowerCase();
      return (
        c.PageName.toLowerCase().includes(searchTermLC) ||
        c.PageOwner.toLowerCase().includes(searchTermLC) ||
        c.EventName.toLowerCase().includes(searchTermLC)
      );
    });
  }

  return (
    <>
      <Search />
      <div className="searchResults">
        {filtered.map((campaign) => {
          return <CampaignResults key={campaign.id} campaign={campaign} />;
        })}
      </div>
    </>
  );
};

export default Main;
