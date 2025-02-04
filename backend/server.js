import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import fieldsRoutes from "./routes/fields.route.js";
import formsRoutes from "./routes/forms.route.js";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/fields", fieldsRoutes);
app.use("/api/forms", formsRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
