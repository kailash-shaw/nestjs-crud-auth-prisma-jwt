import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
// import { Category } from "./category.schema";
import { Category } from "./index.schema";

@Schema({
  timestamps: true,
})
export class Product {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Category" })
  category: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
