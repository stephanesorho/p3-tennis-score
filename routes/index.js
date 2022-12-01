import express from "express";
const router = express.Router();

import { myDB } from "../db/MyMongoDB.js";

/* GET home page. */
router.get("/getData", async function (req, res, next) {
  console.log("get data");

  let points;

  try {
    points = await myDB.getPoints();
    res.status(200).json({ points, msg: "Query successful" });
  } catch (err) {
    console.log("Error in db", err);
    res
      .status(300)
      .json({
        points: [],
        msg: "Error in query",
        error: true,
        errorObj: JSON.stringify(err),
      });
  }
});

export default router;


/*
Your projects is well put together! Nicely, done! 
I learned so much from reviewing this project. Especially, 
I am feeling proud of you complete this project all on your own.
*/

