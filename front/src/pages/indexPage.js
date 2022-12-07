import Match from "../components/Match.js";
import BasePage from "./basePage.js";
import racketimg from "../images/rackets.jpg";
import "../index.css";

function IndexPage() {
  console.log("render App");

  return (
    <BasePage>
      <div className="IndexPage">
        <h1>Players Scores</h1>
        <img src={racketimg} alt="" id="rackets" />
        <Match></Match>
      </div>
    </BasePage>
  );
}

IndexPage.propTypes = {};

export default IndexPage;
