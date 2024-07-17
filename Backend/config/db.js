import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anasaxena07:GoMeal*123@cluster0.u6auslw.mongodb.net/Go-Meal').then(()=>console.log("DB connected"));
}