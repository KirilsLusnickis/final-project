import { useState } from "react";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    password: "",
    city: "",
  });
  console.log(registerData);

  const handleRegisterInput = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegisterSubmit = async () => {
    try {
      //   const { data } =
      await axios.post(
        "http://localhost:3001/api/register",
        registerData
        // , {
        //   withCredentials:true
        // }
      );
      //   document.cookie = `session_token=${data}`;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registerWrapper">
      <h1>REGISTER</h1>
      <div className="formWrapper">
        <div className="formPart">
          <div className="formItem">
            <label>Username</label>
            <input onChange={handleRegisterInput} name="userName" type="text" />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input onChange={handleRegisterInput} name="email" type="email" />
          </div>
        </div>
        <div className="formPart">
          <div className="formItem">
            <label>City(optional)</label>
            <input onChange={handleRegisterInput} name="city" type="text" />
          </div>
          <div className="formItem">
            <label>Password</label>
            <input
              onChange={handleRegisterInput}
              name="password"
              type="password"
            />
          </div>
        </div>
        <div className="submitBtn">
          <button onClick={handleRegisterSubmit}>REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
