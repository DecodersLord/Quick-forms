import mongoose from "mongoose";

const customSettingsSchema = new mongoose.Schema({
    required: Boolean,
    placeholder: String,
    options: [String], // Custom options for dropdown, radio, etc.
});

const formFieldSchema = new mongoose.Schema({
    fieldId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Field", // Reference to the Fields collection
        required: true,
    },
    customSettings: { type: customSettingsSchema, required: false },
    order: { type: Number, required: true },
});

const formSchema = new mongoose.Schema({
    formName: { type: String, required: true },
    description: String,
    fields: { type: [formFieldSchema], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Form = mongoose.model("Form", formSchema);
module.exports = Form;
