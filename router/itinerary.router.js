import express from 'express';
import itineraryController from '../controllers/itinerary.controller.js'

const router = express.Router();

const {getAllItineraries, getItinerariesByCity, getItineraryById, createItinerary, updateItinerary,deleteItinerary, getItineraryByIdWithDetails} = itineraryController;


router.get('/', getAllItineraries);
router.get('/city/:cityId', getItinerariesByCity);
router.get('/:id', getItineraryById);
router.post('/', createItinerary);
router.put('/:id', updateItinerary);
router.delete('/:id', deleteItinerary);

//router.get('/details/:id', getItineraryByIdWithDetails);

export default router;