import "../register.css";
import { Link } from "react-router-dom";

const Result = ({resultContent, btnContent, navUrl}) => {

  const refresh = () => {
    window.location.reload(false)
  }

  return (
    <div className="formSuccess">
      <h2>{resultContent}</h2>
      <div className="submitBtn">
      <Link to={navUrl}>
          <button onClick={() => {if(navUrl==="/register")refresh()}}>{btnContent}</button>
      </Link>
        </div>
    </div>
  );
};

export default Result;
