import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Бүх бүтээгдэхүүн авах
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Шинэ бүтээгдэхүүн нэмэх
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  const saved = await newProduct.save();
  res.json(saved);
});

export default router;

