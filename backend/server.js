import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import fieldsRoutes from "./routes/fields.route.js";
import formsRoutes from "./routes/forms.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import rateLimit from "express-rate-limit";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Apply rate limiter before routes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes (in milliseconds)
    max: 100, // Limit each IP to 100 requests per windowMs
    message:
        "Too many requests from this IP, please try again after 15 minutes",
});

app.use(limiter); // Apply the rate limiter here

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/fields", fieldsRoutes);
app.use("/api/forms", formsRoutes);

// Error-handling middleware
app.use(errorHandler);

// Serve static files
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// Catch-all route for serving the frontend
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
