import { User } from "../model/userSchema.js";
import { Contact } from "../model/contactSchema.js";
import { passwordValidator } from "../utils/passwordValidator.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        // sanitiasing inputs
        const isEmptyFields = [userName, email, password].some(
            (field) => field === "" || field === undefined
        );
        if (isEmptyFields) {
            return res.status(401).json({ message: "All fields are required" });
        }

        //validate password
        const isValidPassword = passwordValidator(password);
        console.log(isValidPassword)

        if (!isValidPassword) {
            return res.status(401).json({
                message:
                    "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one number",
            });
        }
        const isAlreadyExistingUser = await User.findOne({ email: email });
        if (
            isAlreadyExistingUser
        ) {
            return res.status(409).json({ message: "Email is already in use" });
        }
        const saltRounds = 10; // Higher rounds mean stronger but slower hashing
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        //user creation
        const user = await User.create({
            userName,
            email,
            password: hashedPassword
        });
        const createdUser = await User.findOne({ _id: user._id }).select(
            "-password"
        );

        if (!createdUser) {
            return res.status(500).json({ message: "User registration failed" });
        }

        return res.status(201).json({ message: "User Registration Successful" });
    } catch (err) {
        return res
            .status(500)
            .json({ message: `Internal Server due to ${err.message}` });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate input
        if (!email?.trim() || !password?.trim()) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Email doesn't exist" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,  // Use environment variable for security
            { expiresIn: "1d" } // Token expires in 1 hour
        );

        return res.status(200).json({
            message: "Login Successful",
            token
        });
    } catch (err) {
        return res.status(500).json({ message: `Internal Server Error due to ${err.message}` });
    }
};

const ContactUs = async (req, res) => {
    const { firstName, lastName, email, country, phone, jobTitle, company, message } = req.body
    try {
        const result = await Contact.create({
            firstName,
            lastName,
            email,
            country,
            phone,
            jobTitle,
            company,
            message
        })
        res.status(200).json({ message: "Successfully Created", data: result })
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error`, data: error.message })
    }
}

const ContactDetails = async (req, res) => {
    try {
        const result = await Contact.find();
        res.status(200).json({ message: "Successfully Fetched", data: result })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", data: error.message })
    }
}

export { registerUser, loginUser, ContactUs, ContactDetails }