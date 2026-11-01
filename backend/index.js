import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ origin: [process.env.CLIENT_URL, "http://localhost:5173"], credentials: true }));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));
