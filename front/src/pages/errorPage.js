import React from "react";

import BasePage from "./basePage.js";

function ErrorPage() {
  return (
    <BasePage>
      <div>
        <h1>Error 404</h1>
        <h2>Page not found</h2>
      </div>
    </BasePage>
  );
}

ErrorPage.propTypes = {};

export default ErrorPage;
