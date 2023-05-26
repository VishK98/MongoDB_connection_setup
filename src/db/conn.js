// const {MongoClient} = require("mongodb");
// const url = 'mongodb://localhost:27017';

// const database = 'student'
// const client = new MongoClient(url);

// async function getData()
// {
//     console.log("Connected");
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection =db.collection('product');
//     let response = await collection.find({}).toArray();
//     console.log(response);
//     console.log("Connected");

// }

// getData();


const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// 


  // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());


// mongoose.connect("mongodb://localhost:27017/student", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("connection successfull");
// }).catch(() => {
//     console.log("error 404");
// })




const mongoose = require('mongoose');

const uri = 'mongodb://0.0.0.0:27017/registration'; // MongoDB connection URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;

   