import { MongoClient } from "mongodb";

function MyMongoDB() {
  const myDB = {};
  const url = process.env.MONGO_URL || "mongodb://localhost:27017";

  const DB_NAME = "tennisScore";
  const POINTS_COL = "points";

  myDB.getPoints = async () => {
    let client;

    try {
      client = new MongoClient(url);

      //TODO Handle errors
      const colPoints = client.db(DB_NAME).collection(POINTS_COL);

      const query = {};
      console.log("running query");
      return await colPoints.find(query).toArray();
    } finally {
      console.log("getPoints closing connection");
      await client.close();
    }
  };

  return myDB;
}

export const myDB = MyMongoDB();
