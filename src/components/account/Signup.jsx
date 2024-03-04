import EmailPasswordForm from "./EmailPasswordForm";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUser, setScreen } from "../../redux/accountSlice";

const Signup = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();

  const onInput = (event) => {
    setUserInput({ ...userInput, [event.target.id]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setNewUser(userInput));
    dispatch(setScreen(1));
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onInput={onInput} onSubmit={onSubmit}>
        <EmailPasswordForm name="SIGN UP" />
      </form>
    </>
  );
};

export default Signup;
