import mongoose from "mongoose"

export const dbConnection = () => {
    const mongoURL = process.env.DB_URI;



    mongoose.connect(mongoURL)
    .then(() => {
        console.log('✅ database connected');
    })
    .catch((err) => {
        console.log('❌ Error:', err.message);
    })
}