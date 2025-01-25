import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res
                .status(201)
                .json({ message: "User already exists with this email" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({ message: "User created successfully" });
        } else {
            res.status(400).json({ message: "Failed to create user" });
        }
    } catch (error) {
        console.log(error);
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user?.password || ""
        );

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.log(error);
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.log(error);
    }
};
