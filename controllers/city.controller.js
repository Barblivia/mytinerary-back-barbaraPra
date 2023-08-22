import City from '../models/City.js';

const controller = {
    getCities: async (req, res) => {
        try {
            let queries = {};
            if (req.query.city) {
                queries.city = new RegExp(`^${req.query.city}`, 'i');
            }

            const cities = await City.find(queries);

            if (cities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities: cities
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'No cities found'
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: An error occurred while fetching cities'
            });
        }
    },
    getCityById: async (req, res) => {
        try {
            const oneCity = await City.findById(req.params.id);
            
            if(oneCity){
                return res.status(200).json({
                    success: true,
                    city: oneCity
                });
            }
            return res.status(404).json({
                success: false,
                message: 'Error: City with the id not found'
        });
            
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: 'Server error while fetching the city' 
        });
        }
    },

    createCity: async (req, res) => {
        try {
            const newCity = await City.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'City created'
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error: City was not created'
            });
        }
    },

    updateCity: async(req, res) => {
        try {
            await City.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success: true,
                message: 'City updated successfully'
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error: City was not updated'
            })
        }
    },
    deleteCity: async(req, res) => {
        try {
            await City.deleteOne({_id: req.params.id})
            return res.status(200).json({
                success: true,
                message: 'City deleted'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error: City was not deleted'
            })
        }
    },
}
export default controller;