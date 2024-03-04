import { useDispatch } from "react-redux";
import { selectDonations, selectUser } from "../../redux/accountSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const donations = useSelector(selectDonations);

  return (
    <>
      <h2>Dashboard</h2>
      {donations &&
        donations.map((donation) => {
          return (
            <div>
              <h1>{new Date(dontation.date).toDateString}</h1>
              <p>Cause Id: {donation.id}</p>
              <p>Amount donated: {donation.value}</p>
            </div>
          );
        })}
      <button
        onClick={() => {
          dispatch(setLoggedIn());
          dispatch(setScreen(0));
        }}
      >
        Signup
      </button>
    </>
  );
};

export default Dashboard;
