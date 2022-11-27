import React from "react";
import ballimg from "../images/ball.png";
import "./footer.css";

function Footer() {
  return (
    <div className="Footer">
      <img src={ballimg} alt="" id="ball" />
      Tennis score app by Stephane
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
