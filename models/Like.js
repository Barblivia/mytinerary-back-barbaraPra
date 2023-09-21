import { Schema,model,Types } from "mongoose";

const collection = 'likes';

const likeSchema = new Schema({
    itinerary_id: { type: Types.ObjectId, ref: 'itineraries', required: true },
    user: { type: Types.ObjectId, ref: 'users', required: true },
});

const Like = model(collection, likeSchema);

export default Like;