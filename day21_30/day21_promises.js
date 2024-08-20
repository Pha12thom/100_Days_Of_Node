import mongoose from "mongoose";
import router from "./routes/route.js";
import express from "express";

const app = express();


app.use(express.json());

app.use(router);

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/students').then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});