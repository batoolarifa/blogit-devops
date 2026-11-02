
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI.replace(/\/+$/, "");
        const connectionInstance = await mongoose.connect(
            `${mongoUri}/${DB_NAME}`
        );

        console.log(
            `\n MongoDB connected at !! DB HOST: ${connectionInstance.connection.host} \n`
        );
    } catch (error) {
        console.log("MONGO CONNECTION FAILED", error);
        process.exit(1);
    }
};

export default connectDB;
