import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <div id="fixed">
        <div className="loginPage">
        <div className="loginPageContent">
            <h1>L  O  G  I  N</h1>
            <h2>to see all your saved favorites.</h2>
            <form className="form" onSubmit={handleSubmit}>
            <label className="Field">
              Username:{" "}
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </label>
            <label className="Field">
              Password:{" "}
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>
            {isServerError ? (
              <p className="error">Login failed, incorrect credentials!</p>
            ) : null}
            <button>Login</button>
            <Link to="/register">click here to register</Link>
            </form>
        </div>
      </div>
      </div>
      <div id="remaining"></div>
    </div>
  );
};

export default LoginPage;
