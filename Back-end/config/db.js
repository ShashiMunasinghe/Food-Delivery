import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://shashinikavishma:tDxDL1hyJ6NJPEkj@cluster0.j1ypk.mongodb.net/Food-Delivery"
    )
    .then(() => console.log("DB connected"));
};
