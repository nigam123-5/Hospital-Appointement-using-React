import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
// import adminRouter from './routes/adminRoute.js';
import adminRoute from './routes/adminRoute.js';


//app config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());


//api routes


app.use('/api/admin', adminRoute);





app.get('/', (req, res) => {
  res.send('API Working fine!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}   
);
