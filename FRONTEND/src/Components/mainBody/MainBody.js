import "./mainBody.css";

import React from "react";

const MainBody = () => {
  return (
    <div className="mainBody">
      <div className="mainBodyWrapper">
        <img src="/images/mainBody-image.jpg"></img>
        <div className="mainBodyContainer">
          <h1 className="mainBodyHeader">ABOUT US</h1>
          <p className="mainBodyText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            similique rep ellendus magni et aut, ad possimus, illum esse omnis
            culpa est perspiciatis beatae? Reprehenderit incidunt eum dicta
            impedit, sit dolore!
          </p>
        </div>
      </div>
      <div className="mainBodyContainer2"></div>
    </div>
  );
};

export default MainBody;
