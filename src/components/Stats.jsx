const Stats = ({ campaign }) => {
  return (
    <>
      <h2>&pound;{campaign.contributed}</h2>
      <h3>raised of: &pound;{campaign.required}</h3>
      <h4>by {campaign.supporters} supporters</h4>
    </>
  );
};

export default Stats;
