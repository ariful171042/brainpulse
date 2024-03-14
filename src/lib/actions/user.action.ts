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

type updateUserParams = {
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

export const createUser = async (user: userParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    console.log(newUser);

    if (!newUser) {
      return handleError("Error creating user");
    }

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    await connectToDatabase();

    const user = await User.findById(id);

    if (!user) {
      return handleError("User not found");
    }

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (clerkId: string, user: updateUserParams) => {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) {
      return handleError("User not found");
    }

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    await connectToDatabase();

    const deletedUser = await User.findOneAndDelete({ clerkId });

    if (!deletedUser) {
      return handleError("User not found");
    }

    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    handleError(error);
  }
};
