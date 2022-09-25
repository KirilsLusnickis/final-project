import axios from "axios";
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import LoginResult from "../Register/helpingComponents/LoginResult";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const [display, setDisplay] = useState(0);

  const [errorStatus, setErrorStatus] = useState(0);

  const handleLoginInput = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/login",
        loginData,
        { withCredentials: true }
      );
      document.cookie = `session_token=${data}`;
      localStorage.clear();
      const word = loginData.userName;
      localStorage.setItem('userName', word);
    } catch (error) {
      console.error(error);
      setErrorStatus(error.response.status);
      console.log(errorStatus);
    }
  };

  const changeView = (value1, value2) => {
    setDisplay(value1);
    setTimeout(() => {
      setDisplay(value2);
    }, 1000);
  };

  return (
    <>
      <div className="loginWrapper">
      <div className="loginContentWrapper">
        <h1>LOGIN</h1>
        <Link to = "/">
          <span className="icon">
            <i className="fa-solid fa-house"></i>
          </span>
          </Link>
        {display === 0 && (
          <div className="formLoginWrapper">
            <div className="formLoginItem">
              <label>username</label>
              <input className="logininput"
                onChange={handleLoginInput}
                name="userName"
                type="text"
                placeholder="Required"
              />
            </div>
            <div className="formLoginItem">
              <label>password</label>
              <input className="logininput"
                onChange={handleLoginInput}
                name="password"
                type="password"
                placeholder="Required"
              />
            </div>
            <div className="submitBtn">
              <button
                className="btn"
                onClick={() => {
                  handleSubmit();
                  changeView(1,2);
                }}
              >
                LOGIN
              </button>
            </div>
            <div className="question">Don't have an account? <Link to="/register"> <button className="btn btnLog">Register</button></Link></div>
          </div>
        )}
        {display === 1 && (
            <div className="loader">
              <img src={require("../Register/loader.png")} alt="loader" />
            </div>
          )}
        {display === 2 && errorStatus !== 404 && (
          <div>
            <LoginResult
              resultContent={"SUCCESS"}
              btnContent={"PROCEED"}
              navUrl={"/"}
            />
          </div>
        )}
        {display === 2 && errorStatus === 404 && (
          <div>
            <LoginResult
              resultContent={"SIGN-UP FAILED"}
              btnContent={"TRY AGAIN"}
              navUrl={"/sign-up"}
            />
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Login;
