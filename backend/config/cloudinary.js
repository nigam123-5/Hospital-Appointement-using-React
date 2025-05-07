import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

const connectCloudinary = async () => {
// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
}

export default connectCloudinary;

