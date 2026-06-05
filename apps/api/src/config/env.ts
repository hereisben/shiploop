import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 4000;
const DATABASE_URL = process.env.DATABASE_URL || "";
const NODE_ENV = "development";

export const env = {
  PORT,
  DATABASE_URL,
  NODE_ENV,
};
