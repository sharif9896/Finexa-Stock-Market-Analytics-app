import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, required: true },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
