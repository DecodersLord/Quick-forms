import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
    maxLength: {
        type: Number,
        required: false, // Optional, as not all fields may need this
    },
    minLength: {
        type: Number,
        required: false,
    },
    pattern: {
        type: String,
        required: false,
    },
});

const fieldSchema = new mongoose.Schema({
    fieldName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: [
            "text",
            "dropdown",
            "checkbox",
            "radio",
            "textarea",
            "date",
            "file",
        ], // Add other field types as necessary
    },
    placeholder: {
        type: String,
        required: false,
    },
    settings: {
        type: settingsSchema,
        required: false,
    },
    options: {
        type: [String], // Array of strings for dropdown, radio, or checkbox options
        required: function () {
            return ["dropdown", "checkbox", "radio"].includes(this.type);
        },
    },
    required: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Create a model from the schema
const Field = mongoose.model("Field", fieldSchema);

export default Field;
