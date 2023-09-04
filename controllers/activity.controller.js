import Activity from "../models/Activity.js"
//CRUD for activities
const controller = {
    getActivities: async (req, res) => {
        try {
          const activities = await Activity.find();
          res.status(200).json({
            success: true,
            activities: activities,
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: 'Error: An error occurred while fetching activities',
          });
        }
      },
    
      createActivity: async (req, res) => {
        try {
          const newActivity = await Activity.create(req.body);
          res.status(201).json({
            success: true,
            message: 'Activity created',
            activity: newActivity,
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: 'Error: Activity was not created',
          });
        }
      },
    updateActivity: ()=>{},
    deleteActivity: ()=>{},
};
export default controller;
