// const {MongoClient} = require('mongodb');

// const url = "mongodb://127.0.0.1:27017"
// const client = new MongoClient(url);


// const bollywood = async () => {
//     const database = client.db("Movies");
//     const collection = database.collection("bollywood");
//     await client.connect();
//     const dbResponse = await collection.find().toArray();
//     await client.close();
//     return dbResponse; 
// }
// const hollywood = async () => {
//     const database = client.db("Movies");
//     const collection = database.collection("hollywood");
//     await client.connect();
//     const dbResponse = await collection.find().toArray();
//     await client.close();
//     return dbResponse; 
// }
// const technology = async () => {
//     const database = client.db("Movies");
//     const collection = database.collection("technology");
//     await client.connect();
//     const dbResponse = await collection.find().toArray();
//     await client.close();
//     return dbResponse; 
// }
// const fitness = async () => {
//     const database = client.db("Movies");
//     const collection = database.collection("fitness");
//     await client.connect();
//     const dbResponse = await collection.find().toArray();
//     await client.close();
//     return dbResponse; 
// }
// const food = async () => {
//     const database = client.db("Movies");
//     const collection = database.collection("food");
//     await client.connect();
//     const dbResponse = await collection.find().toArray();
//     await client.close();
//     return dbResponse; 
// }

// module.exports = {bollywood, hollywood, technology, fitness, food }

const mongoose = require("mongoose");

mongoose.set("strictQuery",true);

const connection = mongoose.connect("mongodb+srv://praveenraj:m5qDCTekCsGRigeU@cluster0.0vpqaam.mongodb.net/Movies?retryWrites=true&w=majority")
console.log("connected to database")
module.exports= connection;