import express from 'express';
import adminController from '../controllers/adminController.js'; // Adjust the path as necessary
import {adminlogin} from '../controllers/adminController.js'; // Adjust the path as necessary
const router = express.Router();
import upload from '../middlewares/multer.js'; // Adjust the path as necessary


// Route to create a new doctor
router.post('/addDoctor', adminController.addDoctor);
router.get('/getAllDoctors', adminController.getAllDoctors);
router.post('/adminlogin', adminlogin); // Route for admin login


export default router;