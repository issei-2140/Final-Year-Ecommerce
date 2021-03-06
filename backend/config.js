import dotenv from 'dotenv';

dotenv.config();

export default {
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/baazar',
  PORT: process.env.PORT || 5000,
};
