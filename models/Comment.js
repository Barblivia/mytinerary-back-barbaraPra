import { Schema,model,Types } from "mongoose";

const collection = 'comments';

const commentSchema = new Schema({
    comment: { type: String, required: true },
    itinerary_id: { type: Types.ObjectId, ref: 'itineraries', required: true },
    user: { type: Types.ObjectId, ref: 'users', required: true },
});

const Comment = model(collection, commentSchema);

export default Comment;