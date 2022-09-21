import "../register.css";

const Result = ({resultContent}) => {
  return (
    <div className="formSuccess">
      <h2>{resultContent}</h2>
    </div>
  );
};

export default Result;
