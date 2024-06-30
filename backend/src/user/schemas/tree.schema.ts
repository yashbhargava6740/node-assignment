// user/schemas/tree.schema.ts
import mongoose from "mongoose";
export const TreeSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    tree: { type: Object, required: true },
  });
  