const mongoose = require('mongoose');
const connectDatabase = () => {
    mongoose.connect("mongodb+srv://mahanandhan:Vn48-qFpi9Agz_L@cluster0.8si2n.mongodb.net/").then((data)=>{
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    }).catch((err) => {
        console.log(`Database connection failed: ${err.message}`);
        process.exit(1);
    })
}
module.exports=connectDatabase;