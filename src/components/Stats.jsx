import { useState } from "react";
import Donate from "./Donate";

const Stats = ({ campaign }) => {
  const [donate, setDonated] = useState(false);

  return (
    <>
      <h2>&pound;{campaign.contributed}</h2>
      <h3>raised of: &pound;{campaign.required}</h3>
      <h4>by {campaign.supporters} supporters</h4>
      <button onClick={() => setDonated(!donate)}>Donate</button>
      {donate && <Donate campaign={campaign} />}
    </>
  );
};

export default Stats;
