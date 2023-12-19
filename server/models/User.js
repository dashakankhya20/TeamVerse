import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    available: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
export default User;
