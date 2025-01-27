import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import fieldsRoutes from "./routes/fields.route.js";
import formsRoutes from "./routes/forms.route.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/fields", fieldsRoutes);
app.use("/api/forms", formsRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
