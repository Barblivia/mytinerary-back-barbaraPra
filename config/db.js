import mongoose from "mongoose";

let url_link = process.env.MONGO;
mongoose.connect(url_link)
    .then(()=> console.log('Database connected'))
    .catch((err) => console.log(err))

