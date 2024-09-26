import mongoose from "mongoose";

const connectMongoDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongoDB conected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error when connect to mongodb: ${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDB;