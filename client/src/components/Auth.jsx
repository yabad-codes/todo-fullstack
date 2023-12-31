import { useState } from "react";
import { useCookies } from "react-cookie";
const serverUrl = import.meta.env.VITE_REACT_APP_SERVERURL;

const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const viewLogin = (status) => {
    setError(null);
    setIsLogIn(status);
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    if (!isLogIn && password !== confirmPassword) {
      setError("Make sure passwords match!");
      return;
    }
    const response = await fetch(`${serverUrl}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.detail) {
      setError(data.detail);
    } else {
      removeCookie("Email");
      removeCookie("AuthToken");
      setCookie("Email", data.email, {
        sameSite: "None",
        secure: true,
      });
      setCookie("AuthToken", data.token, {
        sameSite: "None",
        secure: true,
      });
      window.location.reload();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form style={{ height: isLogIn ? 320 : 380 }}>
          <h2 className="form-header">
            {isLogIn ? "Please log in" : "Please sign up"}
          </h2>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogIn && (
            <input
              type="password"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <input
            type="submit"
            className="create"
            onClick={(e) => handleSubmit(e, isLogIn ? "login" : "signup")}
          />
          {error && <p className="error-type">Error : {error}</p>}
        </form>
        <div className="auth-options">
          <button
            onClick={() => viewLogin(false)}
            style={{
              backgroundColor: !isLogIn ? "white" : "rgb(188, 188, 188)",
            }}
          >
            Sign Up
          </button>
          <button
            onClick={() => viewLogin(true)}
            style={{
              backgroundColor: !isLogIn ? "rgb(188, 188, 188)" : "white",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
