const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const port = process.env.PORT || 3001;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//database connection info
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aruppvu.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// CRUD Operation
async function run() {
  try {
    await client.connect();
    console.log('Database Connected');
    const database = client.db("test_DB");
    const testCollection1 = database.collection("test_1");


  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello Template World!');
}); 

app.listen(port, () => {
  console.log(`Example app is now listening on port ${port}`);
});