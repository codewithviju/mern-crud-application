import mongoose from "mongoose";

const userShema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const userModel = mongoose.model("users", userShema);
export default userModel;
