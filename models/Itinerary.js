import { Schema, model, Types } from "mongoose";

const collection = 'itineraries';

const itinerarySchema = new Schema({
    title: { type: String, required: true },
    author: {
        fullName: { type: String, required: true },
        profilePhoto: { type: String, required: true }
    },
    price: { type: Number, required: true, max: 5, min: 1 },
    duration: { type: Number, required: true, max: 9, min: 1 },
    likes: {type:Number},
    hashTags: [{ type: String}],
    comments: [{ type: String}],
    cityRelated: { type: Types.ObjectId, required: true, ref: 'city' }
});

const Itinerary = model(collection, itinerarySchema);

export default Itinerary;
