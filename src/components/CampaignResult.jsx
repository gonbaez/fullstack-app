import { justGivingDateToDate } from "../utils";
import { Link } from "react-router-dom";

const CampaignResults = ({ campaign }) => {
  // Some developer has done something weird with the date. This function fixes it.
  return (
    <div className="searchResult">
      <img src={campaign.Photo} />
      <p>{campaign.PageOwner}</p>
      <h1>{campaign.PageName}</h1>
      <h2>{justGivingDateToDate(campaign.EventDate)}</h2>
      <Link to={`/campaign/${campaign.id}`}>Details</Link>
    </div>
  );
};

export default CampaignResults;
