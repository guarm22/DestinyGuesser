const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://destinyguesser:destinyguesseradmin123@destinyguesser0.o3tnqa7.mongodb.net/test?retryWrites=true&w=majority";
const db = mongoose.connect(uri)  


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: "1" });


module.exports = client

