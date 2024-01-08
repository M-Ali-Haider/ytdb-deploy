
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";

import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

const corsOptions = {
    origin: "https://ytdb-deploy-frontend.vercel.app/",
    credentials: true, 
  };

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

const port = process.env.PORT || 8800;

const server = http.createServer(app)

mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("MongoDB Connected!")
        server.listen(port,()=>{
            console.log(`Server is listening on port ${port} `)
        })})
        .catch((err)=>{
          console.log({err});
      })
