import { useState } from "react";
import axios from "axios";
import "./register.css";
import Result from "./helpingComponents/Fail";


const Register = ({heading, firstelem, secondelem, thirdelem, fourthelem, btnContent, successContent }) => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    password: "",
    city: "",
  });

  const [display, setDisplay] = useState(0);

  const [errorStatus, setErrorStatus] = useState(0);

  const handleRegisterInput = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegisterSubmit = async () => {
    try {
    await axios.post(
        "http://localhost:3001/api/register",
        registerData
      );
    } catch (error) {
      console.log(error);
      setErrorStatus(error.response.status);
    }
  };

  const changeView = (value1, value2) => {
    setDisplay(value1)
    setTimeout(() => {
      setDisplay(value2);
    }, 1000);
  }
  


  return (
    <>
    <div className="registerWrapper">
      <h1>{heading}</h1>
      {display===0 && ( <div className="formWrapper">
        <div className="formPart">
          <div className="formItem">
            <label>{firstelem}</label>
            <input onChange={handleRegisterInput} name="userName" type="text" placeholder="Required"/>
          </div>
          <div className="formItem">
            <label>{secondelem}</label>
            <input onChange={handleRegisterInput} name="email" type="email" placeholder="Required" />
          </div>
        </div>
        <div className="formPart">
          <div className="formItem">
            <label>{thirdelem}</label>
            <input onChange={handleRegisterInput} name="city" type="text" placeholder="Optional" />
          </div>
          <div className="formItem">
            <label>{fourthelem}</label>
            <input
              onChange={handleRegisterInput}
              name="password"
              type="password"
              placeholder="Required"
            />
          </div>
        </div>
        <div className="submitBtn">
          <button onClick={() => {handleRegisterSubmit(); changeView(1,2) }}>{btnContent}</button>
        </div>
      </div>)}
      {display===1 &&  <div className="loader"><img src={require('./loader.png')} alt="loader" /></div>}
      {(display===2 && errorStatus!==405) && <Result resultContent={"REGISTERED SUCCESSFULLY"}/>}
      {(display===2 && errorStatus===405) && <Result resultContent={"REGISTRATION FAIL"}/> }
    </div>
    </>
  );
};

export default Register;

