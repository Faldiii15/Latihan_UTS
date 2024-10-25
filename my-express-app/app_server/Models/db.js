let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/Latihan_UTS";
require("./produk");

mongoose.connect(dbURI,{
    // useNewUrlParser: true
});
mongoose.connection.on("connected",() => {
    console.log("Connected to MongoDB");
}); 
mongoose.connection.on("error", (error) =>{
    console.log("Connection Error :" + error);
});
mongoose.connection.on("disconnected",() =>{
    console.log("Disconnected from MongoDB");
     

});
require("./produk");