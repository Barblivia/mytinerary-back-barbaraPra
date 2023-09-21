import { Schema,model,Types } from "mongoose";

const collection = 'cities';

const citySchema = new Schema({
    city: {type: String, required:true},
    country: {type: String, required:true},
    image: {type: String, required:true},
    description: {type: String, required:true}
});

const City = model(collection, citySchema);

export default City;