import "./mainBody.css";

import React from "react";

const MainBody = () => {
  return (
    <div className="mainBody">
      <div className="mainBodyWrapper">
        <div className="mainBodyContainer">
          <img
            src="./mainBody-image.jpg"
            alt="Cinque Terre"
            width="1000"
            height="300"
          ></img>
          <h1>ABOUT US</h1>
        </div>
        <div className="mainBodyContainer2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            similique rep ellendus magni et aut, ad possimus, illum esse omnis
            culpa est perspiciatis beatae? Reprehenderit incidunt eum dicta
            impedit, sit dolore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
