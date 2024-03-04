const EmailPasswordForm = ({ name }) => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button type="submit">{name}</button>
    </>
  );
};

export default EmailPasswordForm;
