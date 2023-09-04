import Itinerary from '../models/Itinerary.js';

const controller = {
  // All itineraries
  getAllItineraries: async (req, res) => {
    try {
      const itineraries = await Itinerary.find();
      res.status(200).json({
        success: true,
        itineraries: itineraries,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error: An error occurred while fetching itineraries',
      });
    }
  },

  // Itineraries per city 
  getItinerariesByCity: async (req, res) => {
    try {
      const cityId = req.params.cityId;
      const itineraries = await Itinerary.find({ cityRelated: cityId });
      if (itineraries.length > 0) {
        res.status(200).json({
          success: true,
          itineraries: itineraries,
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'No itineraries found for this city',
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error: An error occurred while fetching itineraries',
      });
    }
  },

  // Itinerary per city by ID
  getItineraryById: async (req, res) => {
    try {
      const itineraryId = req.params.id;
      const itinerary = await Itinerary.findById(itineraryId);
      if (itinerary) {
        res.status(200).json({
          success: true,
          itinerary: itinerary,
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Itinerary not found',
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error: An error occurred while fetching the itinerary',
      });
    }
  },

  // New itinerary
  createItinerary: async (req, res) => {
    try {
      const newItinerary = await Itinerary.create(req.body);
      res.status(201).json({
        success: true,
        message: 'Itinerary created',
        itinerary: newItinerary,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error: Itinerary was not created',
      });
    }
  },

  // Update
  updateItinerary: async (req, res) => {
    try {
      const itineraryId = req.params.id;
      const updatedItinerary = await Itinerary.findByIdAndUpdate(
        itineraryId,
        req.body,
        { new: true }
      );
      if (updatedItinerary) {
        res.status(200).json({
          success: true,
          message: 'Itinerary updated successfully',
          itinerary: updatedItinerary,
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Itinerary not found',
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error: Itinerary was not updated',
      });
    }
  },

  // Delete
  deleteItinerary: async (req, res) => {
    try {
      const itineraryId = req.params.id;
      const deletedItinerary = await Itinerary.findByIdAndDelete(itineraryId);
      if (deletedItinerary) {
        res.status(200).json({
          success: true,
          message: 'Itinerary deleted',
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Itinerary not found',
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error: Itinerary was not deleted',
      });
    }
  },
};

export default controller;
