import Register from "../../Components/Register/Register";
import "./registerPage.css";

const RegisterPage = () => {

  return (
    <>
    <video autoPlay muted loop id="hello">
        <source src="https://vod-progressive.akamaized.net/exp=1663697397~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3740%2F25%2F643704809%2F2951745670.mp4~hmac=57c8160e14bd202f4384c1266ae107a50bf2626dd03994416e17eda0ceaf7093/vimeo-prod-skyfire-std-us/01/3740/25/643704809/2951745670.mp4" type="video/mp4" />
    </video>
    <div className="main">
      <div className="register">
        <Register 
            heading={"REGISTRATION"}
            firstelem={"USERNAME"}
            secondelem={"E-MAIL"}
            thirdelem={"CITY"}
            fourthelem={"PASSWORD"}
            btnContent={"REGISTER"}
            successContent={"SUCCESSFULLY REGISTERED!!!"}
        />
      </div>
    </div>
    </>
  );
};

export default RegisterPage;
