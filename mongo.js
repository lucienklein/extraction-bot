const mongoose = require("mongoose");
const { DB_ENDPOINT } = process.env;

//Set up default mongoose connection

if (DB_ENDPOINT) {
  console.log("load", DB_ENDPOINT);
  mongoose.connect(DB_ENDPOINT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  console.log("ERROR CONNEXION. MONGO URL EMPTY");
}

mongoose.Promise = global.Promise; //Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("CONNECTED OK"));

module.exports = db;
