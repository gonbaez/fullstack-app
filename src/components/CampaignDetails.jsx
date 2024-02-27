import { useParams } from "react-router-dom";
import { justGivingDateToDate } from "../utils";
import { useSelector } from "react-redux";
import { selectSingleCampaign } from "../redux/campaignSlice";
import Stats from "./Stats";

const CampaignDetails = () => {
  const { id } = useParams();

  const singleCampaign = useSelector((state) =>
    selectSingleCampaign(state, id)
  );

  if (!singleCampaign) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="campaignDetails">
      <div>
        <h1>{singleCampaign.PageName}</h1>
        <img src={singleCampaign.Photo} />
        <p>{singleCampaign.PageOwner}</p>
        <h3>
          Created date: {justGivingDateToDate(singleCampaign.CreatedDate)}
        </h3>
        <h2>{justGivingDateToDate(singleCampaign.EventDate)}</h2>
      </div>
      <div className="stats">
        <Stats campaign={singleCampaign} />
      </div>
    </div>
  );
};

export default CampaignDetails;
