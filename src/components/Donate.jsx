import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateExistingCampaign } from "../redux/campaignSlice";
import { setDonation } from "../redux/accountSlice";

const Donate = ({ campaign }) => {
  const [monthly, setMonthly] = useState(false);
  const [userInput, setUserInput] = useState({});

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.PreventDefault();
    dispatch(setDonation({ monthly, value: userInput.amount, campaign }));
    dispatch(
      updateExistingCampaign({ id: campaign.id, value: userInput.amount })
    );
  };

  const onInput = (event) => {
    setUserInput({ ...userInput, [event.target.id]: event.target.value });
  };

  return (
    <>
      <form onSubmit={onSubmit} onInput={onInput}>
        <button
          style={{ backgroundColor: monthly ? "blue" : "white" }}
          onClick={() => {
            setMonthly(true);
          }}
        >
          Monthly
        </button>
        <button style={{ backgroundColor: monthly ? "white" : "blue" }}>
          One Off
        </button>
        <label htmlFor="donate">Donate</label>
        <input type="number" id="donate" name="donate" />
        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount" name="amount" />
        <button type="submit">Process</button>
      </form>
    </>
  );
};

export default Donate;
