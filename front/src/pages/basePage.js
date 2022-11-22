import React from "react";
import PropTypes from "prop-types";

import NavBar from "./navBar.js";
import Footer from "./footer.js";

function BasePage({ children }) {
  return (
    <div className="BasePage">
      <NavBar></NavBar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}

BasePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BasePage;
