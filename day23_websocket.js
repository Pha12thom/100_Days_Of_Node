import express from "express";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;


const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});