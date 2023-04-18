import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
const app = express();

const uri =
  "mongodb+srv://nean:Nean123@job-seeker.2h9zdym.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const PORT = 5000;
async function run() {
  try {
    await client.connect().then((res) => {
      console.log(`Server running at ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
run().catch(console.dir);
