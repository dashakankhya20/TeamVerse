import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Team = model("Team", teamSchema);
export default Team;
