import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";

import authRouters from "./routes/auth.route.js";
import userRouters from "./routes/user.router.js";
import postRouters from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT=process.env.PORT || 8000;
const __dirname = path.resolve();

app.use(express.json({limit: "4mb"}));
//limit shouldin't too high to prevent DOS
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/api/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/posts", postRouters);
app.use("/api/notifications", notificationRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "frontend/dist")));

    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
    connectMongoDB();
})