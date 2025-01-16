const app = require("./app")
const connectDatabase = require("./db/Database");
process.on("uncaughtException", (err)=>{
    console.error(`Error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);
});

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({path:"./config/config.env"});
};

connectDatabase();

const server = app.listen(8000, ()=>{
    console.log(`server is running on http://localhost:${8000}`);
});

process.on("uncaughtException", (err)=>{
    console.error(`Unhandled Rejection: ${err.message}`);
    console.log("shutting down the server due to unhandled rejection");
    server.close(()=>{
        process.exit(1);
    })
})