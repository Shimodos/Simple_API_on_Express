import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

export function initApi() {
  dotenv.config();
  const port = process.env.PORT || 4000;

  const api = express();
  api.use(cors()); // Cross-Origin Resource Sharing Middleware
  api.use(express.json()); // Body parsing Middleware

  api.listen(port, () => {
    console.log(`API is running on port ${port} PORT`);
  });

  return api;
}
