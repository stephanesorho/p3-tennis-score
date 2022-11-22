import React, { useEffect } from "react";

import BasePage from "./basePage.js";

function IndexPage() {
  useEffect(() => {
    console.log("useEffect fetching data");
    async function reloadData() {
      const data = await (await fetch("/getData")).json();

      console.log("got data", data);
    }

    reloadData();
  }, []);

  console.log("render App");

  return (
    <BasePage>
      <div className="IndexPage">
        <h1>Tennis Match (front)</h1>
      </div>
    </BasePage>
  );
}

IndexPage.propTypes = {};

export default IndexPage;
