import mongoose from "mongoose";

export const roqyaShcema = new mongoose.Schema({
    title: {
        type: String
    },
    roqya: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    numOfRoqya: {
        type: Number
    }
})
export const roqyaModel = mongoose.model("roqya", roqyaShcema)
