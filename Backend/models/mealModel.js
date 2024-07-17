import mongoose from "mongoose";

const mealSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    
    image: {
        type: String,
        required: true
    },
    
    category: {
        type: String,
        required: true
    },
    
})

const mealModel = mongoose.models.meal || mongoose.model('meal', mealSchema);

export default mealModel;