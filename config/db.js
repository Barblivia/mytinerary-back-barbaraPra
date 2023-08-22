import mongoose from "mongoose";

let url_link = process.env.MONGO;
mongoose.connect(url_link)
    .then(()=> console.log('Database connected'))
    .catch((err) => console.log(err))

    //let MONGO= 'mongodb+srv://barblivia:bp1234@mytinerary.yh3htvb.mongodb.net/myTinerary'
    //mongoose.connect(MONGO)
     //mongoose.connect(process.env.MONGO)
