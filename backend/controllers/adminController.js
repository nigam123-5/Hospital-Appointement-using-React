import doctorModel from '../models/doctorModel.js'; // Import the Doctor model
import bcrypt from 'bcryptjs'; 


// APi for adding doctor

const addDoctor = async (req, res) => {
    try {
        const { name, email, password,Image, speciality, degree, experience, about, fees, address, date, available } = req.body;
       

        // Check if email already exists
        const existingDoctor = await doctorModel.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: 'Doctor with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new doctor instance
        const newDoctor = new doctorModel({
            name,
            email,
            password: hashedPassword,
            Image, // Save the image path if provided
            speciality,
            degree,
            experience,
            about,
            available,
            fees,
            address,
            date,
            slots_booked: {} // Initialize slots_booked as an empty object
        });

        // Save the doctor to the database
        await newDoctor.save();

        res.status(201).json({ message: 'Doctor added successfully', doctor: newDoctor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while adding the doctor' });
    }
};


// API for getting all doctors

const getAllDoctors = async (_, res) => {
    try {
        const doctors = await doctorModel.find(); // Fetch all doctors from the database
        res.status(200).json({ message: 'Doctors fetched successfully', doctors });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching doctors' });
    }
};


//api for the admin login

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the admin exists in the database (you may want to use a different model for admin)
        const admin = await doctorModel.findOne({ email, role: 'admin' }); // Assuming you have a role field

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            // Admin login successful
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ success: true, message: 'Admin login successful', token });
        }
        else if (!admin) {
            // Admin not found
            res.status(401).json({ success: false, message: 'Invalid email or password' });
        } else {
            // Check if the password matches
            const isMatch = await bcrypt.compare(password, admin.password);
            if (isMatch) {
                // Password matches, login successful
                res.status(200).json({ success: true, message: 'Admin login successful' });
            } else {
                // Password does not match
                res.status(401).json({ success: false, message: 'Invalid email or password' });
            }
        }
    } catch (error) {
        console.error(error);
        res.json({success:false,message:'An error occurred while logging in'});
    }
}



export default {addDoctor,getAllDoctors,adminLogin};