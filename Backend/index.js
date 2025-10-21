import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import productRoute from "./routes/products.js";
import userRoute from "./routes/users.js";
import orderRoute from "./routes/orders.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB холболт
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

// Сервер ажилуулах
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

