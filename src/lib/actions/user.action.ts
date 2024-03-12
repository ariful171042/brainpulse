"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/userModel";
import { handleError } from "../utils";

type userParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
  role: string;
};

export const createUser = async (user: userParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};
