import { useDispatch, useSelector } from "react-redux";
import { selectScreen, selectUser, setScreen } from "../../redux/accountSlice";
import EmailPasswordForm from "./EmailPasswordForm";
import { useState } from "react";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onInput = (event) => {
    setUserInput({ ...userInput, [event.target.id]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const hashedPassword = sha256(userInput.password + "randomWord");

    if (user.password == hashedPassword) {
      dispatch(setMessage("Logins correct"));
      dispatch(setScreen(2));
      dispatch(setLoggedIn());
    } else {
      dispatch(setMessage("Logins incorrect"));
    }
  };

  return (
    <>
      <h2>Log In </h2>
      <form onInput={onInput} onSubmit={onSubmit}>
        <EmailPasswordForm name="LOG IN" />
      </form>
    </>
  );
};

export default Login;
