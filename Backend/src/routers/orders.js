import express from "express";
import Order from "../models/Order.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Order хийх
router.post("/", verifyToken, async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const saved = await newOrder.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Хэрэглэгчийн захиалгыг авах
router.get("/user/:userId", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

