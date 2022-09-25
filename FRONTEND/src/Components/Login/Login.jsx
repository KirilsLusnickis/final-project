import axios from "axios";
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import LoginResult from "../Register/helpingComponents/Fail";

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
      const capitalized =  word.charAt(0).toUpperCase() + word.slice(1)
      localStorage.setItem('userName', capitalized)
    } catch (error) {
      console.error(error);
      setErrorStatus(error.response.status);
      console.log(errorStatus);
    }
  };
  return (
    <>
      <div className="loginWrapper">
        <h1>LOGIN</h1>
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
                  setDisplay(1);
                }}
              >
                SUBMIT
              </button>
            </div>
            <div className="question">Don't have an account? <Link to="/register"> <button className="btnLog">Register</button></Link></div>
          </div>
        )}
        {display === 1 && errorStatus !== 404 && (
          <div>
            <LoginResult
              resultContent={"SUCCESS"}
              btnContent={"PROCEED"}
              navUrl={"/"}
            />
          </div>
        )}
        {display === 1 && errorStatus === 404 && (
          <div>
            <LoginResult
              resultContent={"SIGN-UP FAILED"}
              btnContent={"TRY AGAIN"}
              navUrl={"/sign-up"}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
