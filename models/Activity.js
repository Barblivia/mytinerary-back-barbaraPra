import { Schema,model,Types } from "mongoose"

const collection = 'activities';

const activitySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    itinerary: { type: Types.ObjectId, required: true, ref: 'itineraries' }
});

const Activity = model(collection, activitySchema);

export default Activity;