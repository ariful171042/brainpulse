"user server";

import { connectToDatabase } from "../database";
import Category from "../database/models/categoryModel";
import { handleError } from "../utils";

export const createCategory = async (categoryName: string) => {
  try {
    await connectToDatabase();

    const newCategory = await Category.create({
      name: categoryName,
    });

    if (!newCategory) {
      handleError("Can not create category");
    }

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategory = async () => {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    if (!categories) handleError("Category not found");

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};
