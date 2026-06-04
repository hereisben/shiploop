import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 4000;

export const env = {
  PORT,
};
