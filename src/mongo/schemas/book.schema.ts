import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Category } from "./index.schema";

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Category" })
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
