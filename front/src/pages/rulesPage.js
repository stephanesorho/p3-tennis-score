import React from "react";
import BasePage from "./basePage.js";
import "./css/rulesPage.css";

function RulesPage() {
  return (
    <BasePage>
      {" "}
      <div>
        <h1>Tennis Rules</h1>
        <h2>Object of the Game</h2>
        <p className="rulesP">
          The game of tennis played on a rectangular court with a net running
          across the centre. The aim is to hit the ball over the net landing the
          ball within the margins of the court and in a way that results in your
          opponent being unable to return the ball. You win a point every time
          your opponent is unable to return the ball within the court.
        </p>
        <h2>Starting the Game</h2>
        <p className="rulesP">
          To determine who serves first, you flip a coin or (more likely) spin a
          racket. Whoever wins the toss gets to decide one of four things: that
          they want to serve first, that they want to receive first, which side
          of the court they want to start on (in which case, the opponent
          chooses who serves first), or that they want to leave these choices up
          to her opponent. Whoever starts serving continues to serve until that
          game is over. Then the serve moves to the other player. You serve from
          behind the baseline, starting on the right-hand side of the court,
          anywhere between the singles sideline and the center mark on the
          court.
        </p>
        <h2>Scoring</h2>
        <p className="rulesP">
          You need to score four points to win a game of tennis. The points are
          known as 15 (1 point), 30 (two points), 40 (three points) and the
          fourth would result in the winning point and the end of that game. If
          the scores went to 40-40 this would be known as deuce. When a game
          reaches deuce the player must then win by two clear points.
        </p>
      </div>
    </BasePage>
  );
}

RulesPage.propTypes = {};

export default RulesPage;
