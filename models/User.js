import { Schema, model, Types } from "mongoose";

const collection = 'users'; 

const Userschema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true},
    password: { type: String, required: true, unique: true },
    image: { type: String },
    role: { type: String, default:'user'},
    country: { type: String },
    online: {type: Boolean, default: false},
    google:{type:Boolean, default: false},
    verified: {type: Boolean, default: true},
    verified_code: {type: String}
     });

const User = model(collection, Userschema);

export default User;