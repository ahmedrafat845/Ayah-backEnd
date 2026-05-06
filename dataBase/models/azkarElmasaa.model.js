import mongoose from "mongoose";

export const azkarElmasaaShcema = new mongoose.Schema({
    title: {
        type: String
    },
    zekr: {
        type: String,
        required: true
    },
    benefit: {
        type: String,
    },
    count: {
        type: Number,
        required: true
    },
    numOfZekr: {
        type: Number
    }
})
export const azkarElmasaaModel = mongoose.model("azkarElmasaa", azkarElmasaaShcema)