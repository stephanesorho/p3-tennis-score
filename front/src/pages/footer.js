import React from "react";
import ballimg from "../images/ball.png";
import "./css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="Footer">
        <img src={ballimg} alt="" id="ball" />
        Tennis score app by Stephane
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
