import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import "dotenv/config.js";
import Holding from "./models/HoldingSchema.js";
import Position from "./models/PositionModel.js";
import authRoutes from "./routes/authRoutes.js";
// const express = require("express");
// const { default: connectDB } = require("./config/mongodb");
// require("dotenv").config();
const app = express();

// Config
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Middlewares

// End Points
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/auth", authRoutes);

app.get("/allholdings", async (req, res) => {
  let allholding = await Holding.find({});
  res.json(allholding);
});

app.get("/allpositions", async (req, res) => {
  let allholding = await Position.find({});
  res.json(allholding);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();

  let newOrder1 = new Holding({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
  });
  await newOrder1.save();
  res.send("Order Placed");
});
// app.get("/addHoldings", async (req, res) => {
//   let tempholdings = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempholdings.forEach(async (holding) => {
//     try {
//       const newHolding = new Position({
//         product: holding.product,
//         name: holding.name,
//         qty: holding.qty,
//         avg: holding.avg,
//         price: holding.price,
//         net: holding.net,
//         day: holding.day,
//         isLoss: holding.isLoss || false,
//       });
//       await newHolding.save();
//       res.send("Done");
//       console.log(`Added holding: ${holding.name}`);
//     } catch (error) {
//       console.error(`Error adding holding ${holding.name}:`, error);
//     }
//   });
// });

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server Started on port localhost:${PORT}`);
});
