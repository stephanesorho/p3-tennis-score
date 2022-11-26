import Match from "../components/Match.js";

import BasePage from "./basePage.js";

function IndexPage() {
  console.log("render App");

  return (
    <BasePage>
      <div className="IndexPage">
        <h1>Tennis Match</h1>
        <Match></Match>
      </div>
    </BasePage>
  );
}

IndexPage.propTypes = {};

export default IndexPage;
