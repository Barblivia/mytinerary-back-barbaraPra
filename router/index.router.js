import express from 'express';
import userRouter from './user.router.js';
import cityRouter from './city.router.js';
import itineraryRouter from './itinerary.router.js';
import activityRouter from './activity.router.js';
import authRouter from './auth.router.js';

const router = express.Router();

router.get("/", (request, response) => {
    console.log(request);
    response.send("Hello World Test");
});

router.use('/users', userRouter);

router.use('/auth', authRouter);

router.use('/cities', cityRouter);

router.use('/itineraries', itineraryRouter);

router.use('/activities', activityRouter);


export default router;

