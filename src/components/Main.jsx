import { useSelector } from "react-redux";
import { selectCampaignData } from "../redux/campaignSlice";
import Campaign from "./Campaign";

const Main = () => {
  const campaignData = useSelector(selectCampaignData);

  if (!campaignData) {
    return <p>Loading...</p>;
  }

  return campaignData.map((campaign) => {
    return <Campaign key={campaign.id} campaign={campaign} />;
  });
};

export default Main;
