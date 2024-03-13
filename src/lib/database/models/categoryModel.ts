import { Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  name: string;
  _id: string;
}

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category = models.Category || model("Category", categorySchema);

export default Category;
