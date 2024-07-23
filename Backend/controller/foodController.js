import mealModel from "../models/mealModel.js";
import fs from "fs";

// add food item

const addFood = async(req,res)=>{

    let image_filename =`${req.file.filename}`;

    const food = new mealModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"failed to add food"})
    }
}

// all food list
const listFood = async(req,res)=>{
    try {
        const foods = await mealModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

// remove food item
const removeFood = async(req,res)=>{
    try {
        const food = await mealModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await mealModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}


export {addFood, listFood, removeFood}