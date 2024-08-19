import mongoose from "mongoose";
import router from "./routes/route.js";

const express = require("express");

const app = express();


app.use(express.json());

app.use(router);

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});