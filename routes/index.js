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
