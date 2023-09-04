import express from 'express';
import userController from '../controllers/activity.controller.js';

const router = express.Router();

router.get('/', userController.getActivities);
router.post('/', userController.createActivity);

export default router;