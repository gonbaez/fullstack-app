import Signup from "./Signup";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoggedIn,
  setScreen,
  selectScreen,
} from "../../redux/accountSlice";
import Dashboard from "./Dashboard";

const Index = () => {
  const screen = useSelector(selectScreen);
  const loggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      {!loggedIn && (
        <div>
          <button onClick={() => dispatch(setScreen(0))}>Signup</button>
          <button onClick={() => dispatch(setScreen(1))}>Login</button>
        </div>
      )}

      {screen === 0 && <Signup />}
      {screen === 1 && <Login />}
      {screen === 2 && <Dashboard />}
    </>
  );
};

export default Index;
