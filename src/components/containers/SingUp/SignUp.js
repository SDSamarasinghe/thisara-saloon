import React from "react";
import AuthForm from "../../AuthForm/AuthForm";
const Signup = () => {
  return (
    <div className="container--form">
      <AuthForm isSignup={true} />
    </div>
  );
};

export default Signup;
