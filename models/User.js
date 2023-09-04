import { Schema, model } from "mongoose";

const collection = 'users'; 

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    profilePhoto: { type: String },
    email: { type: String, required: true, unique: true },
     });

const User = model(collection, userSchema);

export default User;