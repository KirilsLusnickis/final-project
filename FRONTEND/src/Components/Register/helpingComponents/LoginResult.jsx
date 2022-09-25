import "../register.css";
import { Link, useNavigate } from "react-router-dom";

const LoginResult = ({resultContent, btnContent, navUrl}) => {

    const navigate = useNavigate();

  const refresh = () => {
    window.location.reload(false)
  }

  return (
    <div className="formSuccess">
      <h2>{resultContent}</h2>
      <div className="submitBtn">
      <Link to={navUrl}>
          <button onClick={() => {if(navUrl==="/sign-up")refresh()}}>{btnContent}</button>
      </Link>
        </div>
    </div>
  );
};

export default LoginResult;