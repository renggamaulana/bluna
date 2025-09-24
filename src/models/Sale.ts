import mongoose, { Schema, Document } from "mongoose";

export interface ISale extends Document {
  product: string;
  price: number;
  quantity: number;
  total: number;
  timestamp: string;
  date: string; // YYYY-MM-DD
}

const SaleSchema = new Schema<ISale>(
  {
    product: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
    timestamp: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Sale ||
  mongoose.model<ISale>("Sale", SaleSchema);
