import Login from "../../Components/Login/Login";
import "./loginPage.css";

const RegisterPage = () => {

  return (
    <>
    <div className="loginWrapper">
    <video autoPlay muted loop id="hello">
        <source src="https://vod-progressive.akamaized.net/exp=1663697397~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3740%2F25%2F643704809%2F2951745670.mp4~hmac=57c8160e14bd202f4384c1266ae107a50bf2626dd03994416e17eda0ceaf7093/vimeo-prod-skyfire-std-us/01/3740/25/643704809/2951745670.mp4" type="video/mp4" />
    </video>
    <div className="main">
      <div className="register">
        <Login/>
      </div>
    </div>
    </div>
    </>
  );
};

export default RegisterPage;
