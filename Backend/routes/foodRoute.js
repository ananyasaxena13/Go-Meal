import express from "express"
import { addFood, listFood, removeFood } from "../controller/foodController.js"
import multer from "multer" // to create image storage system

const foodRouter = express.Router();

// iimage storage system

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)



export default foodRouter;