import Match from "../components/Match.js";
import BasePage from "./basePage.js";
import racketimg from "../images/rackets.jpg";
import "../index.css";

/*
I really like how you being able to generate a static webpage 
which containing all the elements. It is straight forward and easy used. 
*/



function IndexPage() {
  console.log("render App");

  return (
    <BasePage>
      <div className="IndexPage">
        <h1>Tennis Match</h1>
        <img src={racketimg} alt="" id="rackets" />
        <Match></Match>
      </div>
    </BasePage>
  );
}

IndexPage.propTypes = {};

export default IndexPage;


